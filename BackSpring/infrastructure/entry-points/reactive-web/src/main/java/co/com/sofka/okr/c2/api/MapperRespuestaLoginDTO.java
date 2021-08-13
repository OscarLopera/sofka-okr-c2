package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperRespuestaLoginDTO {

    public Function<Usuarios,RespuestaLoginDTO> toDTOTrue(){
        return usuarios -> new RespuestaLoginDTO(
                usuarios.getFirstTime().getValue(),
                usuarios.getVerticalId().getValue(),
                usuarios.getId()
        );
    }
}
