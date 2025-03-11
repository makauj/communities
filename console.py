#!/bin/usr/env python3
"""console for my communities project"""
import cmd
import sys
from sys import arg


class CommunityConsole(cmd.Cmd):
    """command line interpreter for my communities project"""
    prompt = '(communities) '

    def do_quit(self, arg):
        """Quit command to exit the program"""
        return True

    def do_EOF(self, arg):
        """Quit command to exit the program"""
        print()
        return True

    def emptyline(self):
        """Do nothing on empty input"""
        pass

    def do_create(self, arg):
        """Create a new instance of a class"""
        if not arg:
            print("** class name missing **")
        else:
            print("create", arg)

    def do_show(self, arg):
        """Prints the string representation of an instance"""
        if not arg:
            print("** class name missing **")
        else:
            print("show", arg)

    def do_destroy(self, arg):
        """Deletes an instance based on the class name and id"""
        if not arg:
            print("** class name missing **")
        else:
            print("destroy", arg)

    def do_all(self, arg):
        """Prints all string representation of all instances"""
        if not arg:
            print("all")
        else:
            print("all", arg)
    