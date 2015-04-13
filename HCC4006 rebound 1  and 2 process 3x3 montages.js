
	
basefile = getDirectory("Choose a Directory");
pre = getFileList(basefile);		//load all files
list = newArray();
for (i=0; i<(pre.length);i++)		
{
	if(endsWith(pre[i],".tif"))		//only image files
	{
		list	=	Array.concat(list,basefile+pre[i]);
	}
}
Array.sort(list);
Array.show(list);
setBatchMode(true);
for (i=0; i<(list.length); i++) {
	CurrentImage = list[i];
		open(CurrentImage);
		ImTitle = getTitle();
		makeRectangle(1024, 1024, 3072, 3072);
		run("Crop");
		run("Median...", "radius=2 stack");
		run("Subtract Background...", "rolling=50 stack");
		run("Median...", "radius=3 stack");
//		setThreshold(81,4095);
		setThreshold(54,4095);
		run("Convert to Mask", " ");
		run("Watershed", "stack");
		run("Analyze Particles...", "size=30-750 pixel circularity=0.20-1.00 show=Outlines exclude clear include summarize stack");
		selectWindow("Summary of "+ImTitle);
		saveAs("Text", basefile + ImTitle + ".xls");
		close();
		close();
}	
		
	
	