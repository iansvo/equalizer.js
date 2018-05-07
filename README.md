# equalizer.js
A vanilla JavaScript plugin for equalizing the height of elements. No jQuery required, but if you're using jQuery that's just fine. 

## Installation
Insert the script into your HTML and initialize Equalizer. Initialization should be done using the load event for best results. 


```html
<script src="equalizer.min.js"></script>
<script>
	window.addEventListener('load', function() {
	    Equalizer.init();
	});
</script>
```

You may want to use your own breakpoints for your project. To do so, pass those values in the settings object when you initialize Equalizer. Breakpoints are calculated in a mobile first format, so you don't need to include a breakpoint for `0px`.

```javascript
Equalizer.init({
	breakpoints: {
		small: 480,
		medium: 640,
		large: 1024,
		xlarge: 1200
	}	
});

```



## Usage

Start by adding the `data-equalizer-row` attribute to an element that contains the elements you want to equalize. If you want the elements to only equalize on some breakpoints and not others, including the `data-equalizer-on` attribute and pass it a comma separated list of breakpoint names to equalize on.



Add the attribute `data-equalizer` to all elements that should be equalized.

### Groups

You may also specify a "group" of elements to equalize. This is helpful if you want to equalize multiple groups of elements in the same container.

To create an equalizer group, simply pass the name of the group to the `data-equalizer-row` attribute.

```html
<div class="my-element" data-equalizer-row="my-group">
	...
</div>
```

From there, you must enter the group name into the `data-equalizer` attribute for each element you want associated with that group.

*Note: Elements can only have one `data-equalizer-row` attribute.*


### Methods

`equalizeHeight`

Arguments:

- $elements - NodeList/Array of elements to equalize

## Examples

Equalize only on all breakpoints.

```html
<div class="demo_row" data-equalizer-row>
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500?random" width="500" height="500" alt="demo image">
	</div>
	
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500/900?random" width="500" height="900" alt="demo image">					
	</div>
	
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500/250?random" width="500" height="250" alt="demo image">					
	</div>
</div>
```


Equalize only on `medium` and `xlarge`.

```html
<div class="demo_row" data-equalizer-row data-equalizer-on="medium,xlarge">
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500?random" width="500" height="500" alt="demo image">
	</div>
	
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500/900?random" width="500" height="900" alt="demo image">					
	</div>
	
	<div class="demo_item" data-equalizer>
		<img src="https://picsum.photos/500/250?random" width="500" height="250" alt="demo image">					
	</div>
</div>
```

Equalize multiple groups of elements.

```html
<div class="demo_row" data-equalizer-row="group1" data-equalizer-on="medium,xlarge">
	<div class="demo_item" data-equalizer="group1">
		<img src="https://picsum.photos/500?random" width="500" height="500" alt="demo image">
	</div>
	
	<div class="demo_item" data-equalizer="group1">
		<img src="https://picsum.photos/500/900?random" width="500" height="900" alt="demo image">					
	</div>
	
	<div class="demo_item" data-equalizer="group1">
		<img src="https://picsum.photos/500/250?random" width="500" height="250" alt="demo image">					
	</div>
</div>
<div class="demo_row" data-equalizer-row="group2">
	<div class="demo_item demo_item--green" data-equalizer="group2">
		<img src="https://picsum.photos/150?random" width="150" height="150" alt="demo image">
	</div>
	
	<div class="demo_item demo_item--green" data-equalizer="group2">
		<img src="https:https://picsum.photos/75?random" width="75" height="75" alt="demo image">					
	</div>
	
	<div class="demo_item demo_item--green" data-equalizer="group2">
		<img src="https://picsum.photos/250?random" width="250" height="250" alt="demo image">					
	</div>
</div>	
```

