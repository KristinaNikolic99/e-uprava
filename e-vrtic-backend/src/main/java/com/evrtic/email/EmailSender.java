package com.evrtic.email;

public interface EmailSender {

    void send(String to, String email);

    String emailKreiranje(String name, String link);
}
