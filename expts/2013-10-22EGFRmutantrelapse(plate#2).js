//This macro is intended to create 5x5 montages from a 10x montage from the CellaVista
// microscope. 
//For a given channel, the number of files between adjacent images equals the total  
//number of channels acquired.The file numbering is every other number for a given channel; 
//e.g., every other image is Red channel if two channels are imaged.
//The image file numbering begins in the middle, and spirals out counterclockwise to 
//adjacent tiles, beginning with the tile immediately above the middle.
//Input the basefile directory and the saved locations of each day.  
//The output is the day0-day10 stack of 5x5 montages.


macro "CV_Make Montage [f11]" {
Dialog.create("Enter Row and Column");
        Dialog.addMessage("Match the formatting initially shown");
        Dialog.addString("Text:", "-R00-C00", 18);
        Dialog.show();
       WellNumber = Dialog.getString(); 
        print(WellNumber);

ImageList	=	newArray(13,12,11,10,25,14,3,2,9,24,15,4,1,8,23,16,5,6,7,22,17,18,19,20,21);
Array.show(ImageList);		

basefile = getDirectory("Choose a Directory");
//Code to count the number of subfolders within the base file
a = getFileList(basefile);
list = newArray();
for (i=0; i<(a.length-1);i++)
{	if(endsWith(a[i],"/"))
	{c	=	0;
		c	=	getFileList(basefile+a[i]);
		if(c.length>10)
		{	b	=	basefile+a[i];
			b	=	replace(b,"/","\\");
			list	=	Array.concat(list,b);
		}
	}
}
Array.show(list);

//setBatchMode(true);
for (i=0; i<(list.length); i++) {
	CurrentDay = list[i];
	print(CurrentDay);
	//n=toString(i+1);
	if(i<9)
		n=toString("0"+i+1);
		else n=toString(i+1);
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=13.00 increment=2 scale=100 file=&WellNumber or=[] sort");
		selectWindow(n);
		rename("start.tif");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=12 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=start.tif stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=11 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=10 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=25 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=14 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=3 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=2 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=9 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=24 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=15 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=4 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=1 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=8 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=23 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=16 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=5 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=6 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=7 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=22 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=17 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=18 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=19 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=20 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=21 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=&n stack3=[-- None --]");	
	run("Make Montage...", "columns=5 rows=5 scale=1.0 first=1 last=25 increment=1 border=0 font=12");
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



//Code to read in plate position - This is needed!!!






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
		

day = newArray(day0, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, basefile);
day = newArray(day3, day5, day7, day9, day11, day15, day17, day19, day21, day23, day25, day27, day29, day31, basefile);
//macro "CV_Make Montage [f11]" {
//Dialog.create("Enter Row and Column");
//        Dialog.addMessage("Match the formatting initially shown");
//        Dialog.addString("Text:", "-R00-C00", 18);
//        Dialog.show();
//       WellNumber = Dialog.getString(); 
//        print(WellNumber);

//Create a list of wells for the experiment
//row_len	=	6;
//col_len	=	10;
for (k=top_row;k<(parseInt(top_row)+parseInt(row_len));k++)
	{
	for (j=left_col;j<(parseInt(left_col)+parseInt(col_len));j++)
		{
		if (j>9)
			//{print("R0"+i+"-C"+j);}
			{WellNumber	= "R0"+k+"-C"+j;
			print(WellNumber);
			}
		else
			//{print("R0"+i+"-C0"+j);}
			{WellNumber	= "R0"+k+"-C0"+j;
			print(WellNumber);}

//macro "CV_Make Montage [f11]" {
//Dialog.create("Enter Row and Column");
//        Dialog.addMessage("Match the formatting initially shown");
//        Dialog.addString("Text:", "-R00-C00", 18);
//        Dialog.show();
//       WellNumber = Dialog.getString(); 
//        print(WellNumber);



day = newArray(day0, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, basefile);
for (i=0; i<day.length; i++) print(day[i]);
