#include <iostream>
#include <string>

//Headers
#include "info.h";

#define COLOR_CYAN "\033[36m"
#define COLOR_GREEN "\033[32m"
#define COLOR_RED "\033[31m"
#define COLOR_MAGENTA "\033[35m"
#define COLOR_ORANGE "\033[33m"
#define COLOR_WHITE "\033[37m"

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
        cout << COLOR_ORANGE << "\n> ";
        cin >> select;

        if(select == "--help") {
            const string __HELP = "\n--help :: Show all commands.\n--clear :: Clear the command line.\n--info :: Show all info of your OS\n";
            cout << COLOR_CYAN << __HELP << endl;
        }
        else if(select == "--clear") {
            system("clear");
        }
        else if(select == "--info") {
            info(op);
        }

        
    }
}
