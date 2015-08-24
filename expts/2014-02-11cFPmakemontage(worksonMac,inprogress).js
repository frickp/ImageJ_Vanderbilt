//This macro is intended to create time-ordered NxN montage image stacks from a 3x3 
//or 5x5 montages from the CellaVista microscope. 
//For a given channel, the number of files between adjacent images equals the total  
//number of channels acquired.The file numbering is every other number for a given channel; 
//e.g., every other image is Red channel if two channels are imaged.
//The image file numbering begins in the middle, and spirals out counterclockwise to 
//adjacent tiles, beginning with the tile immediately above the middle.
//Input the basefile directory and the saved locations of each day.  
//The output is the temporally-registered stack of NxN image montages.
//1) Choose the parent directory that contains all the timepoints as subfolders.
//2) The subfolders MUST be renamed in increasing 2 digit order. 
//That is, the first measurement is 01, 02, … 10, 11, …
//3) This is for H2B only data. If another channel is added, just need to modify the image order variable.


macro "CV_Make Montage [f11]" {
//Dialog.create("Enter Row and Column");
//       Dialog.addMessage("Choose well ID; Match shown format");
//       Dialog.addString("Text:", "-R02-C02", 18);
//        Dialog.show();
//		WellNumber = Dialog.getString(); 
//      print(WellNumber);

Dialog.create("Enter diagonal length  of image montage");
        Dialog.addMessage("Choose 3 or 5, for NxN montage");
        Dialog.addString("Text:", "5", 18);
        Dialog.show();
		diag = Dialog.getString(); 
        print(diag);

Dialog.create("Enter the top row number");
		Dialog.addMessage("value: 1-8, corresponding to A-H");
		Dialog.addString("Row", "2", 18);
		Dialog.show();
		top_row = Dialog.getString(); 
		print("top_row: "+top_row);
		
Dialog.create("Enter the total number of rows");
		Dialog.addMessage("value: 1-8");
		Dialog.addString("Row length", "6", 18);
		Dialog.show();
		row_len = Dialog.getString(); 
		print("row_len: "+row_len);
	
Dialog.create("Enter the left-most column number");
		Dialog.addMessage(" value: 1-12");
		Dialog.addString("Row", "2", 18);
		Dialog.show();
		left_col = Dialog.getString(); 
		print("left_col: "+left_col);
		
Dialog.create("Enter the total number of columns");
		Dialog.addMessage("value: 1-12");
		Dialog.addString("Column length", "10", 18);
		Dialog.show();
		col_len = Dialog.getString(); 
		print("col_len: "+col_len);

//Code to keep only subfolders within the base file
basefile = getDirectory("Choose a Directory");
pre = getFileList(basefile);		//load all files
list = newArray();
for (i=0; i<(pre.length);i++)		//get subset that contain files (subdirs)
{
	if(endsWith(pre[i],"/"))		//only subdirectories ends with "/"
	{
		list	=	Array.concat(list,pre[i]);
	}
}
Array.sort(list);
Array.show(list);

//raster through each of the wells selected
for (k=top_row;k<(parseInt(top_row)+parseInt(row_len));k++)
	{
	for (j=left_col;j<(parseInt(left_col)+parseInt(col_len));j++)
		{
		if (j>9)	//{print("R0"+i+"-C"+j);}
			{WellNumber	= "R0"+k+"-C"+j;
			print(WellNumber);
			}
		else		//{print("R0"+i+"-C0"+j);}
			{WellNumber	= "R0"+k+"-C0"+j;
			print(WellNumber);}
if(diag==3)
	ImageOrder	=	newArray(3,2,9,4,1,8,5,6,7); //Image number spirals out counterclockwise from the center		
	else ImageOrder	=	newArray(13,12,11,10,25,14,3,2,9,24,15,4,1,8,23,16,5,6,7,22,17,18,19,20,21);

Array.show(ImageOrder);		

setBatchMode(true);
for (i=0; i<(list.length); i++) {
	CurrentDay = list[i];
	//Change escape character to work on Mac
	//Only needed on Macbook Pro!
	CurrentDay	=	replace(CurrentDay,"\\","/");
	print(CurrentDay);
	//n=toString(i+1);
	if(i<9)
		n=toString("0"+i+1);
		else n=toString(i+1);
	x	=	ImageOrder[0];
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
		selectWindow(n);
		rename("start.tif");
	x	=	ImageOrder[1];	
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=start.tif stack2=&n stack3=[-- None --]");
	for(l=2;l<diag*diag;l++)
	{
		x	=	ImageOrder[l];
		run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	}
	TotalIm	=	parseInt(diag) * diag;
	run("Make Montage...", "columns=&diag rows=&diag scale=1.0 first=1 last=&TotalIm increment=1 border=0 font=12");
	setMinAndMax(0, 4095);
	rename("Well" + WellNumber + "H2B_measure" + n);
	//saveAs("Tiff", basefile + "Well" + WellNumber + "H2B_day" + i);
	selectWindow("Concatenated Stacks");
	close();
}
run("Images to Stack", "name=Stack title=[] use");
saveAs("Tiff", basefile + "Well" + WellNumber + "H2Bstack");
wait(100);
close();
//waitForUser("Done") ;
}
}
}

