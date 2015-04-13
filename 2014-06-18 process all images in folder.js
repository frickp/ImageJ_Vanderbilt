
	
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
		run("Median...", "radius=2 stack");
		run("Subtract Background...", "rolling=50 stack");
		run("Median...", "radius=3 stack");
//		setThreshold(144,4095);
//		setThreshold(60,4095);
//		setThreshold(40,4095); //for HCC4006 XA4
//		setThreshold(93,4095); //for PC9
//		setThreshold(47,4095); //for HCC4006 XA8
//		setThreshold(109,4095); This may potentially work for XA9, but should be verified
//		setThreshold(84,4095);  //for XA5
		setThreshold(123,4095); //for 11-18 XA9
		run("Convert to Mask", " ");
		run("Watershed", "stack");
		run("Analyze Particles...", "size=20-750 pixel circularity=0.20-1.00 show=Outlines exclude clear include summarize stack");
		selectWindow("Summary of "+ImTitle);
		saveAs("Text", basefile + ImTitle + ".xls");
		close();
		close();
}	
		
	
	