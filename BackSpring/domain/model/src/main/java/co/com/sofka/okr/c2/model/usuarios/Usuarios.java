package co.com.sofka.okr.c2.model.usuarios;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder(toBuilder = true)
public class Usuarios {
    private String id;
    private String idUser;
    private Name name;
    private Email email;
    private UrlPhoto urlPhoto;
    private Phone phone;
    private FirstTime firstTime;
    private VerticalId verticalId;
    private Rol rol;

    public Usuarios() {
    }

    public Usuarios(String id, String idUser, Name name, Email email, UrlPhoto urlPhoto, Phone phone, FirstTime firstTime, VerticalId verticalId, Rol rol) {
        this.id = id;
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.urlPhoto = urlPhoto;
        this.phone = phone;
        this.firstTime = firstTime;
        this.verticalId = verticalId;
        this.rol = rol;
    }

    public Usuarios(String idUser, Name name, Email email, UrlPhoto urlPhoto, Phone phone, FirstTime firstTime, VerticalId verticalId, Rol rol) {
        this.idUser = idUser;
        this.name = name;
        this.email = email;
        this.urlPhoto = urlPhoto;
        this.phone = phone;
        this.firstTime = firstTime;
        this.verticalId = verticalId;
        this.rol = rol;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIdUser() {
        return idUser;
    }

    public void setIdUser(String idUser) {
        this.idUser = idUser;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public Email getEmail() {
        return email;
    }

    public void setEmail(Email email) {
        this.email = email;
    }

    public UrlPhoto getUrlPhoto() {
        return urlPhoto;
    }

    public void setUrlPhoto(UrlPhoto urlPhoto) {
        this.urlPhoto = urlPhoto;
    }

    public Phone getPhone() {
        return phone;
    }

    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    public FirstTime getFirstTime() {
        return firstTime;
    }

    public void setFirstTime(FirstTime firstTime) {
        this.firstTime = firstTime;
    }

    public VerticalId getVerticalId() {
        return verticalId;
    }

    public void setVerticalId(VerticalId verticalId) {
        this.verticalId = verticalId;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

}
