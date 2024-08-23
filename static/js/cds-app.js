// Immediately Invoked Function Expression (IIFE) to avoid polluting global namespace
( function($) {
  'use strict';

  // Constants
  const CONSTANTS = {
    API_ENDPOINT: 'https://944yirpts7.execute-api.ca-central-1.amazonaws.com/Production/lever',
    REDIRECT_URLS: {
      en: {
        success: '/thank-you/',
        error: '/error/'
      },
      fr: {
        success: '/merci/',
        error: '/erreur/'
      }
    },
    MAX_WORD_COUNT: 150
  };

  // Utility functions
  const utils = {
    getPageLanguage: () => $( 'html' ).attr( 'lang' ),
    redirect: ( isSuccess ) => {
      const lang = utils.getPageLanguage();
      const url = isSuccess ? CONSTANTS.REDIRECT_URLS[ lang ].success : CONSTANTS.REDIRECT_URLS[ lang ].error;
      window.location.href = url;
    },
    logError: ( error ) => {
      console.error( 'Error occurred:', error );
      // In a production environment, you might want to send this error to a logging service
    }
  };

  // Form validation
  const validateForm = () => {
    let isValid = true;
    const errors = [];

    $( '.validate-required' ).each( function() {
      const $field = $( this );
      const value = $field.val().trim();

      if ( !value ) {
        isValid = false;
        errors.push( $field );
        $field.addClass( 'error' );
      } else {
        $field.removeClass( 'error' );
      }
    });

    if ( !isValid ) {
      errors[ 0 ].focus();
    }

    return isValid;
  };

  // Word count functionality
  const updateWordCount = ( $textarea, $counter ) => {
    const words = $textarea.val().trim().split( /\s+/ );
    const count = words.length;
    $counter.text( count );
    $counter.toggleClass( 'text-danger', count > CONSTANTS.MAX_WORD_COUNT );
  };

  // Form submission
  const submitForm = async ( formData ) => {
    try {
      const response = await fetch( CONSTANTS.API_ENDPOINT, {
        method: 'POST',
        body: formData
      } );

      if ( !response.ok ) {
        throw new Error( `HTTP error! status: ${ response.status }` );
      }

      utils.redirect( true );
    } catch ( error ) {
      utils.logError( error );
      utils.redirect( false );
    }
  };

  // Event handlers
  const attachEventHandlers = () => {
    // External links
    $( '#wb-cont' ).on( 'click', 'a[ href^="http://" ], a[ href^="https://" ]', function( e ) {
      e.preventDefault();
      window.open( this.href, '_blank' );
    });

    // Footer analytics
    $( '#footer-id' ).on( 'gcdsClick', function( e ) {
      this.setAttribute( 'data-gc-analytics-navigation', `footer:Canadian Digital Service: ${ e.detail }` );
    });

    // Form submission
    $( '#contactForm' ).on( 'submit', async function( e ) {
      e.preventDefault();

      if ( !validateForm() ) return;

      const $submitBtn = $( '#submit-btn' );
      const $jobSubmitBtn = $( '#job-submit-btn' );

      $submitBtn.addClass( 'loading inactive' ).prop( 'disabled', true );
      $jobSubmitBtn.prop( 'disabled', true );

      const formData = new FormData( this );
      await submitForm( formData );

      // Reset form state
      this.reset();
      $submitBtn.removeClass( 'loading inactive' ).prop( 'disabled', false );
      $jobSubmitBtn.prop( 'disabled', false );
    });

    // Word count
    const $textarea = $( '#message' );
    const $counter = $( '#word-count' );
    $textarea.on( 'input', () => updateWordCount( $textarea, $counter ) );
  };

  // Initialize
  const init = () => {
    // Polyfill for HTMLMediaElement.prototype.playing
    Object.defineProperty( HTMLMediaElement.prototype, 'playing', {
      get: function() {
        return !!( this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2 );
      }
    });

    $( document ).ready(() => {
      attachEventHandlers();
      // Initial word count update
      updateWordCount( $( '#message' ), $( '#word-count' ) );
    });
  };

  // Run initialization
  init();
})(jQuery);