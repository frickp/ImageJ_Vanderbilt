//This macro is intended to create 5x5 montages from a 10x montage from the CellaVista
// microscope. 
//For a given channel, the number of files between adjacent images equals the total  
//number of channels acquired.The file numbering is every other number for a given channel; 
//e.g., every other image is Red channel if two channels are imaged.
//The image file numbering begins in the middle, and spirals out counterclockwise to 
//adjacent tiles, beginning with the tile immediately above the middle.
//Input the basefile directory and the saved locations of each day.  
//The output is the day0-day10 stack of 5x5 montages.


basefile = getDirectory("Choose a Directory");

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
		

day0 =   basefile+"1\\";
day1 =   basefile+"2\\";
day2 =   basefile+"3\\";
day3 =   basefile+"4\\";
day4 =   basefile+"5\\";
day5 =   basefile+"6\\";
day6 =   basefile+"7\\";
day7 =   basefile+"8\\";
day8 =   basefile+"9\\";
day9 =   basefile+"10\\";
day10 =  basefile+"11\\";

day = newArray(day0, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, basefile);
		
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

//basefile = "F:\\CellaVista\\2013-10-15 cFP plate #1\\";
//day0 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\1\\";
//day1 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\2\\";
//day2 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\3\\";
//day3 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\4\\";
//day4 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\5\\";
//day5 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\6\\";
//day6 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\7\\";
//day7 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\8\\";
//day8 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\9\\";
//day9 =   "F:\\CellaVista\\2013-10-15 cFP plate #1\\10\\";
//day10 =  "F:\\CellaVista\\2013-10-15 cFP plate #1\\11\\";



day = newArray(day0, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, basefile);
for (i=0; i<day.length; i++) print(day[i]);

setBatchMode(true);
for (i=0; i<11; i++) {
	CurrentDay = day[i];
	print(CurrentDay);
	n=toString(i+1);
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=13 increment=2 scale=100 file=&WellNumber or=[] sort");
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
	rename("Well" + WellNumber + "H2B_day" + i);
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