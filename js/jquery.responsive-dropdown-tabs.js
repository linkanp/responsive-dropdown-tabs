/**
 * jQuery UI responsive dropdown tabs 1.0.0
 * Released under the MIT license.
 * A jQuery plugin to create dropdown or tabs as appropriate.
 * @param options
 */
(function(factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function($) {
	'use strict';

	$.fn.dropdownTabs = function (options, tabOptions, selectmenuOptions) {
		// The settings object provides default settings.
		// The options argument can override them.
		var settings = $.extend({
			mediaQuery: '(min-width: 800px)'
		}, options);

		var dropdownTabs = this;
                
		/**
		 * Initializes the plugin
		 */
		var init = function() {
			// Implement now...
			implement();
                        
                        // ...and again when the window resizes.
			$(window).on('resize.dropdownTabs', debounce(implement, 250));
                        
		};

		var implement = function() {
			var isLargeViewport = matchMedia(settings.mediaQuery).matches;
                        dropdownTabs.each(function() {
				var dropdownTab = $(this);
				var content = dropdownTab.find('.dropdown-tab-content');
				 
                                

				if (!isLargeViewport) {
					// Destroy tabs if previously implemented
					if (dropdownTab.hasClass('ui-tabs')) {
						dropdownTab.tabs('destroy');
                                        }
                                        
                                        dropdownTab.find('.tabs').hide();
                                        content.find('section').hide();  
                                        content.find('section:first').show();  
                                        
                                        // Implement & Prepare the dropdown behind the scene
                                        if($(".dropdown-options").length == 0){
                                            
                                            var dropdown = $("<select></select>", {
                                                name: "dropdown-options",
                                                class: "dropdown-options"
                                            }).prependTo(dropdownTab);
                                            dropdownTab.find('ul li a').each(function(){
                                                var op_value = $(this).attr('href');
                                                var op_html = $(this).html();
                                                $("<option>",{
                                                    value: op_value
                                                }).html(op_html).appendTo(dropdown);
                                            });
                                            
                                            
                                        } 
                                        // Initiallize the jquery select menu        
                                        $(".dropdown-options").selectmenu(selectmenuOptions);    
                                        $( ".dropdown-options" ).on( "selectmenuchange", function( event, ui ) {
                                                    content.find('section').hide();
                                                    content.find(ui.item.value).show();
                                        } );
                                        
				} else {
					// Hide dropwdown if previously implemented
					$(".dropdown-options").selectmenu("destroy");
					$(".dropdown-options").hide();

					// Implement tabs
                                        dropdownTab.find('.tabs').show();
					if (!dropdownTab.hasClass('ui-tabs')) {
						dropdownTab.tabs(tabOptions);
					}
                                        
				}
			});
		};

		/**
		 * Returns a function that cannot be called in succession unless a specified
		 * amount of time has passed
		 * @param func - The function to debounce
		 * @param wait - The wait time (ms) before running the function again
		 * @returns The debounced function
		 */
		var debounce = function(func, wait) {
			var timeout;

			return function() {
				clearTimeout(timeout);

				timeout = setTimeout(function() {
					func();
				}, wait);
			};
		};

		// Let's go!
		init();

		// Always return the target object to allow chaining.
		return this;
	};
}));



