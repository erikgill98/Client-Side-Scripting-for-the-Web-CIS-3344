package view;

// classes imported from java.sql.*
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import model.passwordDeck.*;

// classes in my project
import dbUtils.*;

public class passwordView {

    public static StringDataList getAllPasswords(DbConn dbc) {

        // sdl will be an empty array and DbError with "" 
        StringDataList sdl = new StringDataList();

        // sd will have all of it's fields initialized to ""
        StringData sd = new StringData();

        try {
            String sql = "SELECT Password_ID, users_password, image_url, password_answer, password_question, website_passwords "
                    + "FROM user_passwords, web_user\n "
                    + "WHERE user_passwords.web_user_id = web_user.web_user_id";  // you always want to order by something, not just random order.

            PreparedStatement stmt = dbc.getConn().prepareStatement(sql);
            ResultSet results = stmt.executeQuery();

            while (results.next()) {

                sd = new StringData();

                // the formatUtils methods do not throw exceptions, but if they find illegal data, they write 
                // a message right in the field that they are trying to format.
                // plainInteger returns integer converted to string with no commas.
                sd.Password_ID = FormatUtils.plainInteger(results.getObject("Password_ID"));
                sd.users_password = FormatUtils.formatString(results.getObject("users_password"));
                sd.image_url = FormatUtils.formatString(results.getObject("image_url"));
                sd.password_answer = FormatUtils.formatString(results.getObject("password_answer"));
                sd.password_question = FormatUtils.formatString(results.getObject("password_question"));
                sd.website_passwords = FormatUtils.formatString(results.getObject("website_passwords"));
                
                sdl.add(sd);
            }
            results.close();
            stmt.close();
        } catch (Exception e) {
            sd.errorMsg = "Exception thrown in WebUserView.getAllUsers(): " + e.getMessage();
            sdl.add(sd);
        }
        return sdl;
    }
}
