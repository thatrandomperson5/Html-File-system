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
Let break down the main structure:
```html
<li>
  <div class="div">icon name</div>
    <ul class="branch>
               <li><i class="file"></i> filename <li>          
    </ul>
</li>
```
