$(document).ready( function() {
    //ex-1
    $( "#draggable" ).draggable();
    //ex-2 
    $( "#sortable" ).sortable();  
    //ex-3
    var data = [
        "HTML",
        "CSS",
        "JS",
        "JQ",
        ];
    $("#c_name").autocomplete({
        source:data
    });
    //ex-4
   $( "#accordion" ).accordion({
        collapsible:true
    });
   //ex-5
   $( "#datepicker" ).datepicker();

   //ex-6
   $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
   $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
   //ex-7
   var tooltips = $( "[title]" ).tooltip({
      position: {
        my: "left top",
        at: "right+5 top-5",
        collision: "none"
      }
    });
    $( "<button>" )
      .text( "Show help" )
      .button()
      .on( "click", function() {
        tooltips.tooltip( "open" );
      })
      .insertAfter( "form" );

//ex-8
      // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });
   //ex-9

    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "custom.colorize", {
      // default options
      options: {
        red: 255,
        green: 0,
        blue: 0,
 
        // Callbacks
        change: null,
        random: null
      },
 
      // The constructor
      _create: function() {
        this.element
          // add a class for theming
          .addClass( "custom-colorize" );
 
        this.changer = $( "<button>", {
          text: "change",
          "class": "custom-colorize-changer"
        })
        .appendTo( this.element )
        .button();
 
        // Bind click events on the changer button to the random method
        this._on( this.changer, {
          // _on won't call random when widget is disabled
          click: "random"
        });
        this._refresh();
      },
 
      // Called when created, and later when changing options
      _refresh: function() {
        this.element.css( "background-color", "rgb(" +
          this.options.red +"," +
          this.options.green + "," +
          this.options.blue + ")"
        );
 
        // Trigger a callback/event
        this._trigger( "change" );
      },
 
      // A public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      random: function( event ) {
        var colors = {
          red: Math.floor( Math.random() * 256 ),
          green: Math.floor( Math.random() * 256 ),
          blue: Math.floor( Math.random() * 256 )
        };
 
        // Trigger an event, check if it's canceled
        if ( this._trigger( "random", event, colors ) !== false ) {
          this.option( colors );
        }
      },
 
      // Events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {
        // remove generated elements
        this.changer.remove();
 
        this.element
          .removeClass( "custom-colorize" )
          .enableSelection()
          .css( "background-color", "transparent" );
      },
 
      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {
        // _super and _superApply handle keeping the right this-context
        this._superApply( arguments );
        this._refresh();
      },
 
      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
          return;
        }
        this._super( key, value );
      }
    });
 
    // Initialize with default options
    $( "#my-widget1" ).colorize();
 
    // Initialize with two customized options
    $( "#my-widget2" ).colorize({
      red: 60,
      blue: 60
    });
 
    // Initialize with custom green value
    // and a random callback to allow only colors with enough green
    $( "#my-widget3" ).colorize( {
      green: 128,
      random: function( event, ui ) {
        return ui.green > 128;
      }
    });
 
    // Click to toggle enabled/disabled
    $( "#disable" ).on( "click", function() {
      // use the custom selector created for each widget to find all instances
      // all instances are toggled together, so we can check the state from the first
      if ( $( ":custom-colorize" ).colorize( "option", "disabled" ) ) {
        $( ":custom-colorize" ).colorize( "enable" );
      } else {
        $( ":custom-colorize" ).colorize( "disable" );
      }
    });
 
    // Click to set options after initialization
    $( "#green" ).on( "click", function() {
      $( ":custom-colorize" ).colorize( "option", {
        red: 64,
        green: 250,
        blue: 8
      });
    });

   //ex-10

     var state = true;
    $( "#button10" ).on( "click", function() {
      if ( state ) {
        $( "#effect10" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect10" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
   //ex-11
    $( "#resizable" ).resizable();
  
  //ex-12

    $( "#button12" ).on( "click", function() {
      $( "#effect12" ).removeClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect12" ).addClass( "newClass" );
      }, 1500 );
    }

   //ex-13
 $( "#button13" ).on( "click", function() {
      $( ".newClass13" ).switchClass( "newClass13", "anotherNewClass13", 1000 );
      $( ".anotherNewClass13" ).switchClass( "anotherNewClass13", "newClass13", 1000 );
    });

//ex-14
$( "#datepicker14" ).datepicker( $.datepicker.regional[ "fr" ] );
    $( "#locale14" ).on( "change", function() {
      $( "#datepicker14" ).datepicker( "option",
        $.datepicker.regional[ $( this ).val() ] );
    });


   //ex-15
   $( "#sortable1, #sortable2" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();

  } );