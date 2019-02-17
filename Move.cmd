@echo off
color 02
set /p id="Enter ID: "
cd desktop
move %id%.zip %appdata%
cd %appdata%
move %id%.zip .minecraft/resourcepacks
exit