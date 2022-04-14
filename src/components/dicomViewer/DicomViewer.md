##Settings for mouse - MouseButtonMasks
- 0 : No button or un-initialized
- 1 : Primary button (usually left)
_ 2 : Secondary button (usually right)
- 4 : Auxilary button (usually middle or mouse wheel button)
- 8 : 4th button (typically the "Browser Back" button)
- 16 : 5th button (typically the "Browser Forward" button)

see for futher instructions https://github.com/cornerstonejs/cornerstoneTools/issues/659
e.g. 
###PanTool: to move up,down, left and right press the left button
```
    const PanTool = cornerstoneTools.PanTool;
    cornerstoneTools.addTool(PanTool)
    cornerstoneTools.setToolActive('Pan', { mouseButtonMask: 1 })
```
###Zoom in and out: use the mouse wheel
```
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool; 
    cornerstoneTools.addTool(ZoomMouseWheelTool) 
    cornerstoneTools.setToolActive('ZoomMouseWheel', {mouseButtonMask: 1}) 
```

###Rotation: press backward button and move it
```
    const WwwcTool = cornerstoneTools.WwwcTool;
    cornerstoneTools.addTool(WwwcTool)
    cornerstoneTools.setToolActive('Wwwc', {mouseButtonMask: 4})
```

###Contrast change: press the center mouse button and move up and down
```
    const WwwcTool = cornerstoneTools.WwwcTool;
    cornerstoneTools.addTool(WwwcTool)
    cornerstoneTools.setToolActive('Wwwc', {mouseButtonMask: 4})
```

##Good Tutorials 
- Link for tools:https://tools.cornerstonejs.org/examples/tools/zoom.html
- Link to tutorial: https://javascriptimageviewer.wordpress.com/ (Totirum 7)
- Link to good example: https://codesandbox.io/s/xj172zjx5w?from-embed=&file=/src/index.js:220-250
- all possible cornerstoneTools: https://tools.cornerstonejs.org/examples/
- view-source:https://rawgit.com/cornerstonejs/cornerstone/master/example/scrollzoompanwl/index.htm