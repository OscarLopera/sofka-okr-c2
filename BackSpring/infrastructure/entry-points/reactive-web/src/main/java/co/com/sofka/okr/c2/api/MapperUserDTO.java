package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.usuarios.values.*;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperUserDTO {

    public Function<Usuarios,UsuarioDTO> toDTO(){
        return usuarios -> new UsuarioDTO(
                usuarios.getId(),
                usuarios.getName().getValue(),
                usuarios.getEmail().getValue(),
                usuarios.getUrlPhoto().getValue(),
                usuarios.getPhone().getValue(),
                usuarios.getFirstTime().getValue(),
                usuarios.getVerticalId().getValue(),
                usuarios.getRol().getValue()
        );
    }

    public Function<UsuarioDTO,Usuarios> UserToDTO(){
        return usuarioDTO -> new Usuarios(
                usuarioDTO.getId(),
                new Name(usuarioDTO.getName()),
                new Email(usuarioDTO.getEmail()),
                new UrlPhoto(usuarioDTO.getUrlPhoto()),
                new Phone(usuarioDTO.getPhone()),
                new FirstTime(usuarioDTO.getFirstTime()),
                new VerticalId(usuarioDTO.getVerticalId()),
                new Rol(usuarioDTO.getRol())
        );
    }
}