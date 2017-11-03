# Responsive Dropdown Tabs

Tabs are not displayed well in smaller devices, so making them dropdown in smaller
devices is a popular implementation. But now a days, some people think that dropdown
select interface provides better experience for users. This plugin converts the tabs
to a jQuery selectmenu dropdown list for smaller devices based on CSS media query. 

The [tabs](http://api.jqueryui.com/tabs/) and
[selectmenu](http://api.jqueryui.com/selectmenu/) are created with
[jQuery UI](http://jqueryui.com), so all options available to those jQuery UI
widgets are also available to this plugin.

## Usage

Include jQuery, jQuery UI, and this plugin in your page, either in the `<head>` or before your
`</body>` tag.

### Add Scripts to Your Page

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="js/jquery.responsive-dropdown-tabs.min.js"></script>
```

### Include or Write Your Own CSS

You can use the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/) to
create a theme for your dropdowns and tabs, or you can write your own CSS.

### Create the HTML

Use the following HTML structure. Ensure that the `href` attribute for each tab
heading matches the corresponding section `id` attribute. 

You can change the `dropdown-tabs` class to anything you like, but the other
classes are required.

```html
<div class="dropdown-tabs">               
        <ul class="tabs">
                <li><a href="#section-1">Heading 1</a></li>
                <li><a href="#section-2">Heading 2</a></li>
                <li><a href="#section-3">Heading 3</a></li>
        </ul>              
        <div class="dropdown-tab-content">
                <section id="section-1">
                        <h3>Heading 1</h3>
                        <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque velit unde, porro sint iusto perferendis quisquam similique impedit consequatur mollitia, veritatis. Possimus officia, quaerat assumenda!</p></div>
                </section>

                <section id="section-2">
                        <h3>Heading 2</h3>
                        <div><p>Nihil, deleniti cum esse incidunt voluptatibus corporis, libero, sapiente voluptates non ut autem dolorum ullam commodi ipsam! Dolores quasi voluptate cum dolore quia nemo, at?</p></div>
                </section>

                <section id="section-3">
                        <h3>Heading 3</h3>
                        <div><p>Numquam aliquam delectus deleniti quis repellendus alias laboriosam ipsum atque accusantium! Reiciendis obcaecati cupiditate repellat ipsam suscipit necessitatibus sunt eaque et laudantium eligendi, laborum distinctio.</p></div>
                </section>
        </div>
</div>
```

Call the plugin on the element you want to convert, passing in three objects
representing the options for the plugin, the
tabs widget options, and the selectmenu widget options,, respectively.

All options available to the jQuery UI Selectmenu and Tabs widgets are available
for use.

```javascript
var $dropdownTabs = $('.dropdown-tabs');

$dropdownTabs.dropdownTabs({
        // Plugin options
        mediaQuery: '(min-width: 40em)' // Set when tabs should be used instead of accordion
}, {
        // jQuery UI Tabs options <http://api.jqueryui.com/tabs/>
        show: {
                effect: 'fade'
        }
}, {
        // jQuery UI Selectmenu options <http://api.jqueryui.com/selectmenu/>
        width: "100%"
});
```
