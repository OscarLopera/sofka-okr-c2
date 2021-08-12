package co.com.sofka.okr.c2.mongo.helper;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import co.com.sofka.okr.c2.mongo.entities.UsuariosEntity;
import org.springframework.stereotype.Component;

import java.util.function.Function;

public class UserMapper {

    public Function<UsuariosEntity, Usuarios> fromUsuariosEntity() {
        return newEntity -> new Usuarios(
                newEntity.getId(),
                newEntity.getIdUser(),
                new Name(newEntity.getName()),
                new Email(newEntity.getEmail()),
                new UrlPhoto(newEntity.getUrlPhoto()),
                new Phone(newEntity.getPhone()),
                new FirstTime(newEntity.getFirstTime()),
                new VerticalId(newEntity.getVerticalId()),
                new Rol(newEntity.getRol())
        );
    }

    public Function<Usuarios,UsuariosEntity> fromUsuarios(){
        return newUsuarios->new UsuariosEntity(
                newUsuarios.getId(),
                newUsuarios.getIdUser(),
                newUsuarios.getName().getValue(),
                newUsuarios.getEmail().getValue(),
                newUsuarios.getUrlPhoto().getValue(),
                newUsuarios.getPhone().getValue(),
                newUsuarios.getFirstTime().getValue(),
                newUsuarios.getVerticalId().getValue(),
                newUsuarios.getRol().getValue()
        );
    }
}
