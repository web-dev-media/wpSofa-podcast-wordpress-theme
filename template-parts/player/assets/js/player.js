/**
 * here comes the wpSofa podcast media player
 */

const applyfilters = require( 'applyfilters' );
const localstorageHandle = require( '@web-dev-media/localstorage' );
const hash = require( 'object-hash' );

class mediaPlayer {
  constructor() {
    if (window.wpsofa.player !== undefined) {
      return;
    }

    const options = {
      storage_key: 'wpsofa-player-storage',
      currentPos: 0,
      selectors: {
        player: '.player',
        controls: {
          startStop: '.media-action',
          progressBar: '.progress',
          progressBarStatus: '.progress .status',
          duration: '.status',
        },
      },
    };

    applyfilters.doFilter( 'mediaPlayerOptions', options ).then(() => {
      return options;
    });

    this.options = options;

    this.players = [];

    localstorageHandle.options.cacheTime = -1;

    this.collectPlayers();

    if ( this.players.length > 0 ) {
      window.wpsofa.player = this.players;

      this.addEvents();

      applyfilters.doFilter( 'mediaPlayerCollection', this.players ).then(() => {
        return options;
      });
    }
  }

  /**
	 * registers a function  that use a filter/hook 'this.doFilter()'
	 * this function can modify the code execution or data
	 *
	 * @param {string} filterName
	 * @param {string} callback
	 * @param {number} priority
	 * @return {void}
	 */
  collectPlayers() {
    const self = this;

    if ( self.options.selectors ) {
      let selector = self.options.selectors.player;

      if ( selector ) {
        const players = document.querySelectorAll( selector );

        [].forEach.call( players, function( player ) {
          const playerControls = {};
          const playerSources = {};

          const audio = player.querySelector( 'audio' );
          const sourcesNodes = audio.querySelectorAll( 'source' );

          if ( sourcesNodes ) {
            [].forEach.call( sourcesNodes, function( source ) {
              const type = source.getAttribute( 'type' );
              playerSources[type] = source.getAttribute( 'src' );
            } );

            for ( selector in self.options.selectors.controls ) {
              playerControls[selector] = player.querySelector( self.options.selectors.controls[selector] );
            }

            playerControls.currentTime = player.querySelector( '.current-time' );

            const mediaPlayerObject = {
              node: player,
              audio: audio,
              controls: playerControls,
              sources: playerSources,
              sourcesNodes: sourcesNodes,
              hash: hash( playerSources ),
            };

            applyfilters.doFilter( 'mediaPlayerObject', mediaPlayerObject ).then(() => {
              return mediaPlayerObject;
            });

            self.players.push(mediaPlayerObject);
          }
        } );
      }
    }
  }

  addEvents() {
    if ( this.players ) {
      this.players.forEach( (player) => {
        localstorageHandle.update( player.hash + '_isPlaying', false );

        ['play', 'pause', 'timeupdate'].map( (event) => {
          player.audio.addEventListener( event, ( e ) => this[event]( player ) );
        } );

        player.controls.startStop.addEventListener( 'click', ( e ) => this.playStop( e.currentTarget, player ) );
        player.controls.progressBar.addEventListener( 'click', ( e ) => this.seek( e, player ) );

        this.timeupdate( player );
      } );
    }
  }

  playStop( playStopElem, player ) {
    const btn = playStopElem.querySelector( 'div' );
    const classes = {
      play: 'play',
      pause: 'pause',
    };

    if ( btn.classList.contains( classes.play ) ) {
      btn.classList.remove( classes.play );
      btn.classList.add( classes.pause );

      playStopElem.classList.remove( classes.play );
      playStopElem.classList.add( classes.pause );

      player.audio.play();
      player.audio.currentTime = localstorageHandle.get( player.hash + '_currentTime' );
      localstorageHandle.update( player.hash + '_isPlaying', true );
    } else {
      btn.classList.remove( classes.pause );
      btn.classList.add( classes.play );

      playStopElem.classList.remove( classes.pause );
      playStopElem.classList.add( classes.play );

      player.audio.pause();
      localstorageHandle.update( player.hash + '_isPlaying', false );
    }
  }

  play( player ) {
    this.playerTimeUpdater( player );
  }

  pause( player ) {
    this.playerTimeUpdater( player );
  }

  timeupdate( player ) {
    const currentTime = player.audio.currentTime ? player.audio.currentTime : localstorageHandle.get( player.hash + '_currentTime' );
    const duration = player.audio.duration ? player.audio.duration : localstorageHandle.get( player.hash + '_duration' );

    if ( currentTime ) {
      const currTimeElem = player.controls.currentTime;
      const percent = Math.floor( (
        100 / duration
      ) * currentTime );

      player.controls.progressBarStatus.style.width = percent + '%';

      if ( percent > 85 ) {
        currTimeElem.dataset.progress = '85';
      } else if ( percent > 70 ) {
        currTimeElem.dataset.progress = '70';
      } else if ( percent > 45 ) {
        currTimeElem.dataset.progress = '45';
      } else if ( percent > 15 ) {
        currTimeElem.dataset.progress = '15';
      } else {
        currTimeElem.dataset.progress = '0';
      }

      if ( localstorageHandle.get( player.hash + '_isPlaying' ) === true && duration != null ) {
        localstorageHandle.update( player.hash + '_currentTime', player.audio.currentTime );
        localstorageHandle.update( player.hash + '_duration', player.audio.duration );
      }

      [].forEach.call( player.sourcesNodes, function( source ) {
        const src = source.getAttribute( 'src' );
        source.setAttribute( 'src', src.split( '#' )[0] + '#t=' + currentTime );
      } );

      this.playerTimeUpdater( player );
    }
  }

  playerTimeUpdater( player ) {
    const currTimeElem = player.controls.currentTime;
    const currentTime = player.audio.currentTime ? player.audio.currentTime : localstorageHandle.get( player.hash + '_currentTime' );

    if ( currentTime ) {
      currTimeElem.innerText = this.formatSecondsAsTime( currentTime );
    }
  }

  formatSecondsAsTime( secs ) {
    let hr = Math.floor( secs / 3600 );
    let min = Math.floor( (
      secs - (
        hr * 3600
      )
    ) / 60 );
    let sec = Math.floor( secs - (
      hr * 3600
    ) - (
      min * 60
    ) );

    if ( min < 10 ) {
      min = '0' + min;
    }
    if ( sec < 10 ) {
      sec = '0' + sec;
    }
    if ( hr < 10 ) {
      hr = '0' + hr;
    }

    return hr + ':' + min + ':' + sec;
  }

  seek( mouse, player ) {
    const percent = mouse.offsetX / player.node.offsetWidth;
    player.audio.currentTime = percent * player.audio.duration;

    localstorageHandle.update( player.hash + '_currentTime', player.audio.currentTime );
    localstorageHandle.update( player.hash + '_duration', player.audio.duration );

    this.timeupdate( player );
  }
}

export default mediaPlayer;
