const mainjava = `import javax.swing.*;
import java.awt.*;

public class SwingTemplate {

    private static JTextArea textArea;
    private static JButton button;

    public static void main(String[] args) {

        //Create a new JFrame with a title.
        JFrame frame = new JFrame("Yurd Swing Template!");

        //Application UI components
        frame.setLayout(new BorderLayout());

        textArea = new JTextArea();
        button = new JButton("Click me!");

        //Application deault size.
        frame.setSize(800, 500);

        //Open the application in the center of the screen.
        frame.setLocationRelativeTo(null);

        //Lock the application resizable. (Replace 'false' in 'true' if you want to Unlock this function)
        frame.setResizable(false);

        //Close the applicatin when the cross is pressed.
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        //Set the application visible (Put this function after the application code).
        frame.setVisible(true);
    }

}
`


module.exports = {
    mainjava
}