const mainpy = `import tkinter as tk

class App:
    def __init__(self):
        self.window = tk.Tk()
        self.window.geometry("600x600")
        self.window.title("Hello Word!")

    def run(self):
        self.window.mainloop()

if __name__ == "__main__":
    app = App()
    app.run()`


module.exports = {
    mainpy
}