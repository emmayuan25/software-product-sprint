package com.google.sps.servlets;

import com.google.gson.Gson; 
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  // Array that stores strings 
  private ArrayList<String> messages = new ArrayList<String>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    messages.add("Just stop your crying, it is a sign of the times");
    messages.add("Welcome to the final show");
    messages.add("Hope you are wearing your best clothes");
    messages.add("You cannot bribe the door on your way to the sky");
    messages.add("You look pretty good down here");
    messages.add("We never learn, we have been here before");
    messages.add("Why are we always stuck and running from the bullets?");
    messages.add("Why are we always stuck and running from your bullets?");
    messages.add("We gotta get away from here");
    messages.add("Just stop your crying it will be alright");

    String json = convertToJsonUsingGson(messages);

    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

 /**
   * Converts a ServerStats instance into a JSON string using the Gson library. Note: We first added
   * the Gson library dependency to pom.xml.
   */
  private String convertToJsonUsingGson(ArrayList arr) {
    Gson gson = new Gson();
    String json = gson.toJson(arr);
    return json;
  }
}
