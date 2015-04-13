//This macro is intended to create 5x5 montages from a 10x montage from the CellaVista microscope. The four corners are not imaged. If these are imaged, the image numbering must be adjusted. 
//For a given channel, the number of files between adjacent images equals the total  number of channels acquired.The file numbering is every other number for a given channel; 
//e.g., every other image is Red channel if two channels are imaged.
//The image file numbering begins in the middle, and spirals out counterclockwise to adjacent tiles, beginning with the tile immediately above the middle.
//Input the basefile directory and the saved locations of each day.  The output is the day0-day10 stack of 5x5 montages.

macro "CV_SingleCell [f11]" {
Dialog.create("Enter Row and Column");
        Dialog.addMessage("Match the formatting initially shown");
        Dialog.addString("Text:", "-R00-C00", 18);
        Dialog.show();
        WellNumber = Dialog.getString(); 
        print(WellNumber);

basefile = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/";
day0 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-10 PLF PC9 singlecell2 day0/1/";
day1 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-11 PLF PC9 singlecell2 day1/1/";
day2 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-12 PLF PC9 singlecell2 day2/1/";
day3 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-13 PLF PC9 singlecell2 day3/1/";
day4 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-14 PLF PC9 singlecell2 day4/1/";
day5 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-15 PLF PC9 singlecell2 day5/1/";
day6 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-16 PLF PC9 singlecell2 day6/1/";
day7 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-17 PLF PC9 singlecell2 day7/1/";
day8 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-18 PLF PC9 singlecell2 day8/1/";
day9 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-19 PLF PC9 singlecell2 day9/1/";
day10 = "/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/PC9_par DCGA-2/2012-04-20 PLF PC9 singlecell2 day10/1/";

day = newArray(day0, day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, basefile);
for (i=0; i<day.length; i++) print(day[i]);

setBatchMode(true);
for (i=0; i<11; i++) {
	CurrentDay = day[i];
	print(CurrentDay);
	open("/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/blank.tif");
	selectWindow("blank.tif");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=24 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=blank.tif stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=22 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=20 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	open("/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/blank.tif");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=blank.tif stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=26 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=6 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=4 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=18 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=42 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=28 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=8 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=2 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=16 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=40 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=30 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=10 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=12 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=14 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=38 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	open("/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/blank.tif");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=blank.tif stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=32 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=34 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	run("Image Sequence...", "open=[CurrentDay] number=1 starting=36 increment=2 scale=100 file=&WellNumber or=[] sort");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=1 stack3=[-- None --]");
	open("/Volumes/New Volume/CellaVista/PC9 par DCGA (#1-3)/blank.tif");
		run("Concatenate...", "  title=[Concatenated Stacks] stack1=[Concatenated Stacks] stack2=blank.tif stack3=[-- None --]");
	run("Make Montage...", "columns=5 rows=5 scale=1.0 first=1 last=25 increment=1 border=0 font=12");
	setMinAndMax(0, 4095);
	rename("Well" + WellNumber + "H2B_day" + i);
	//saveAs("Tiff", basefile + "Well" + WellNumber + "H2B_day" + i);
	selectWindow("Concatenated Stacks");
	close();
}
run("Images to Stack", "name=Stack title=[] use");
saveAs("Tiff", "/Users/Peter/Desktop/" + "Well" + WellNumber + "FUCCIstack");
}
