//This macro is written to output image stacks of either 5x5 or 3x3 montages from the CellaVista
//microscope back to the original directory. Subfolders for different timepoints must be renamed
//so that they contain an equal number of digits, e.g., "1" should be changed to "01", etc.
//Code requires ImageJ version 1.48 or newer
//The image file numbering begins in the middle, and spirals out counterclockwise to 
//adjacent tiles, beginning with the tile immediately above the middle.
//Input the basefile directory and the saved locations of each day.  
//Peter Frick 2013, Vanderbilt University



macro "CV_Make Montage [f11]" {

basefile = getDirectory("Choose a Directory");
//Code to count the number of subfolders within the base file containing image data
a = getFileList(basefile);
list = newArray();
for (i=0; i<(a.length);i++){
	if(endsWith(a[i],"/")){
	c	=	0;
		c	=	getFileList(basefile+a[i]);
		if(c.length>10){
			b	=	basefile+a[i];
			b	=	replace(b,"/","\\");
			list	=	Array.concat(list,b);
		}
	}
}
//diag=3;
Array.show(list);
Dialog.create("Enter diagonal length  of image montage");
        Dialog.addMessage("Choose 3 or 5, for NxN montage");
        Dialog.addString("Text:", "5", 18);
        Dialog.show();
		diag = Dialog.getString(); 
        print("diag NxN: "+diag);

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

TotalIm	=	parseInt(diag) * diag;
if(diag==3){
	ImageOrder	=	newArray(3,2,9,4,1,8,5,6,7);
	}		
	else {
	ImageOrder	=	newArray(13,12,11,10,25,14,3,2,9,24,15,4,1,8,23,16,5,6,7,22,17,18,19,20,21);
	}
setBatchMode(true);
//Loops to sequentially load all rows in range
for (k=top_row;k<(parseInt(top_row)+parseInt(row_len));k++){
	for (j=left_col;j<(parseInt(left_col)+parseInt(col_len));j++){
		if (j>9){
			WellNumber	= "R0"+k+"-C"+j;
		}
		else {WellNumber	= "R0"+k+"-C0"+j;
		}
		print(WellNumber);
		//Loop to load all images at each timepoint and return an image stack of spatially registered (NxN) montages
		for (i=0; i<(list.length); i++){
			CurrentDay = list[i];
			print(CurrentDay);
			if(i<9){
				n=toString("0"+i+1);
			}
			else{
			n=toString(i+1);
			}
			x	=	ImageOrder[0];
			run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
			selectWindow(n);
			rename("start.tif");
			x	=	ImageOrder[1];	
			run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
			run("Concatenate...", "  title=[Concatenated Stacks] stack1=start.tif stack2=&n stack3=[-- None --]");
			for(l=2;l<diag*diag;l++){
				x	=	ImageOrder[l];
				run("Image Sequence...", "open=[CurrentDay] number=1 starting=&x increment=2 scale=100 file=&WellNumber or=[] sort");
				run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
			}
			run("Make Montage...", "columns=&diag rows=&diag scale=1.0 first=1 last=&TotalIm increment=1 border=0 font=12");
			setMinAndMax(0, 4095);
			rename("Well" + WellNumber + "H2B_measure" + n);
			selectWindow("Concatenated Stacks");
			close();
		}
		run("Images to Stack", "name=Stack title=[] use");
		saveAs("Tiff", basefile + "Well" + WellNumber + "H2Bstack");
		wait(100);
		close();
	}
}
}