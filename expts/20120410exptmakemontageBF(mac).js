// This macro is intended to create 5x5 montages from a 10x montage from the CellaVista microscope. 
// The four corners are not imaged. If these are imaged, the image numbering must be adjusted. 
// For a given channel, the number of files between adjacent images equals the total  
// number of channels acquired.The file numbering is every other number for a given channel; 
// e.g., every other image is Red channel if two channels are imaged.
// The image file numbering begins in the middle, and spirals out 
// counterclockwise to adjacent tiles, beginning with the tile immediately above the middle.
// Input the basefile directory and the saved locations of each day.
// The output is the day0-day10 stack of 5x5 montages.

macro "CV_SingleCell [f11]" {
Dialog.create("Enter Row and Column");
        Dialog.addMessage("Match the formatting initially shown");
        Dialog.addString("Text:", "-R00-C00", 18);
        Dialog.show();
        WellNumber = Dialog.getString(); 
        print(WellNumber);

basefile = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/";
day0 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-10 PLF PC9 singlecell2 BF screen/1/";

day = newArray(day0, basefile);
for (i=0; i<day.length; i++) print(day[i]);

setBatchMode(true);
for (i=0; i<1; i++) {
	CurrentDay = day[i];
	//print(CurrentDay);
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=13 increment=1 scale=100 file=&WellNumber or=[] sort");
		rename("first.tif");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=12 increment=1 scale=100 file=&WellNumber or=[] sort");
	selectWindow("first.tif");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=first.tif stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=11 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=10 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=25 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=14 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=3 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=2 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=9 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=24 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=15 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=4 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=1 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=8 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=23 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=16 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=5 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=6 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=7 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=22 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=17 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=18 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=19 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=20 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=21 increment=1 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Make Montage...", "columns=5 rows=5 scale=1.0 first=1 last=25 increment=1 border=0 font=12");
	setMinAndMax(0, 4095);
	rename("Well" + WellNumber + "BF" + i);
	//saveAs("Tiff", basefile + "Well" + WellNumber + "H2B_day" + i);
	selectWindow("Concatenated Stacks");
	close();
}
saveAs("Tiff", "/Users/Peter/Desktop/" + "Well" + WellNumber + "BFstack");
}
