package co.com.sofka.okr.c2.mongo.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class UsuariosEntity {
    @Id
    private String id;
    private String name;
    private String email;
    private String urlPhoto;
    private String phone;
    private Boolean firstTime;
    private String verticalId;
    private String rol;

    public UsuariosEntity() {
    }

    public UsuariosEntity(String id, String name, String email, String urlPhoto, String phone, Boolean FirstTime, String verticalId, String rol) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.urlPhoto = urlPhoto;
        this.phone = phone;
        this.firstTime = FirstTime;
        this.verticalId = verticalId;
        this.rol = rol;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrlPhoto() {
        return urlPhoto;
    }

    public void setUrlPhoto(String urlPhoto) {
        this.urlPhoto = urlPhoto;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(String verticalId) {
        this.verticalId = verticalId;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public Boolean getFirstTime() {
        return firstTime;
    }

    public void setFirstTime(Boolean firstTime) {
        this.firstTime = firstTime;
    }
}