## How to make an html file tree!
In this tutorial you will learn how to make the file tree below:

<style>
iframe {
  height: 300px;
  border: none;
}
</style>
<iframe src="https://thatrandomperson5.github.io/Html-File-system/p/preview.html">

</iframe>


First Make the frame:

```html
  <div class="cont">

  <ul class="tree">
    <li>
      <div class="div"><i class="folder"></i>&nbsp;Hello</div>
      <ul class="branch">
        <li class="item"><i class="file"></i>&nbsp;Hi</li>
        <li>
          <div class="div"><i class="folder"></i>&nbsp;Folder</div>
        <ul class="branch">
        <li><i class="file"></i>&nbsp;File 1</li>
        <li><i class="file"></i>&nbsp;File 2</li>
        </ul>
        </li>
      </ul>
    </li>
    <li><i class="file"></i>&nbsp;World</li>
  </ul>
</div>
```
Let's break down the main structure:
```html
<li>
  <div class="div">icon name</div>
    <ul class="branch">
       <li><i class="file"></i> filename <li>          
    </ul>
</li>
```
We have above list elm folder with a div to contian the name. Below that we have a branch and more files.
Now all you have to do is add css and js. You can find the code [here](https://github.com/thatrandomperson5/Html-File-system/tree/main/p) and the full preview [here](https://thatrandomperson5.github.io/Html-File-system//p/preview.html)

The main project repo will be linked below soon
* Coming soon
