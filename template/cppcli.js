const infoh = `#include <stdio.h>
#include <ostream>
#include <stdlib.h>
#include <sys/sysinfo.h>


#define COLOR_CYAN "\\033[36m"
#define COLOR_GREEN "\\033[32m"
#define COLOR_RED "\\033[31m"
#define COLOR_MAGENTA "\\033[35m"
#define COLOR_ORANGE "\\033[33m"
#define COLOR_WHITE "\\033[37m"

#define MINREQ      0xFFF   



static void info(char *os)
{
    

    if(os == "Solaris") 
    {
        printf(COLOR_RED);
        printf("\\nERROR:\\nThis commands isn't avaible.");
    }
    else 
    {
        int days, hours, mins;
        struct sysinfo sys_info;

        if(sysinfo(&sys_info) != 0)
            perror("sysinfo");


        // Uptime
        days = sys_info.uptime / 86400;
        hours = (sys_info.uptime / 3600) - (days * 24);
        mins = (sys_info.uptime / 60) - (days * 1440) - (hours * 60);



        /*****************/
        printf(COLOR_RED);
        printf("-------------------------------------------------------\\n");
        //System
        printf(COLOR_MAGENTA);
        printf("\\nSystem: %s\\n", system);
        //Memory
        printf(COLOR_MAGENTA);
        printf("Memory: Total %ldk\\t | Free %ldk\\n", sys_info.totalram / 1024, sys_info.freeram / 1024);
        //Uptime
        printf(COLOR_MAGENTA);
        printf("Uptime: %ddays, %dhours, %dminutes, %ldseconds\\n",days, hours, mins, sys_info.uptime % 60);
        printf(COLOR_MAGENTA);
        //Other ram info
        printf("Shared Ram: %ldk\\n", sys_info.sharedram / 1024);
        printf(COLOR_MAGENTA);
        printf("Buffered Ram: %ldk\\n", sys_info.bufferram / 1024);
        // Swap space
        printf(COLOR_MAGENTA);
        printf("Swap: Total %ldk\\t | Free: %ldk\\n", sys_info.totalswap / 1024,sys_info.freeswap / 1024);
        //Number of process
        printf(COLOR_MAGENTA);
        printf("Number of processes: %d\\n", sys_info.procs);
        /*****************/
        printf(COLOR_RED);
        printf("\\n-------------------------------------------------------\\n");
    }
}`

const maincpp = `#include <iostream>
#include <string>

//Headers
#include "info.h";

#define COLOR_CYAN "\\033[36m"
#define COLOR_GREEN "\\033[32m"
#define COLOR_RED "\\033[31m"
#define COLOR_MAGENTA "\\033[35m"
#define COLOR_ORANGE "\\033[33m"
#define COLOR_WHITE "\\033[37m"

#define MINREQ      0xFFF 

using namespace std;

int main() 
{

    char *op;

    #ifdef _WIN32
        op = "Windows";
    #elif _WIN64
        op = "Windows";
    #elif __APPLE__
        op = "MacOS";
    #elif __linux__
        op = "Linux";
    #endif

    cout << COLOR_GREEN << "Yard cli just ran on a " << op << " system!" << endl;
    cout << COLOR_GREEN << "Type --help for show all commands." << endl;


    string select;

    while(true) 
    {
        cout << COLOR_ORANGE << "\\n> ";
        cin >> select;

        if(select == "--help") {
            const string __HELP = "\\n--help :: Show all commands.\\n--clear :: Clear the command line.\\n--info :: Show all info of your OS\\n";
            cout << COLOR_CYAN << __HELP << endl;
        }
        else if(select == "--clear") {
            system("clear");
        }
        else if(select == "--info") {
            info(op);
        }

        
    }
}`


module.exports = {
    code: [{fileName: 'main.cpp', fileCode: maincpp}, {fileName: 'info.h', fileCode: infoh}],
    name: ['cpp-cli', 'c++-cli'],
}