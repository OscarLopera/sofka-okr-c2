package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.usuarios.Usuarios;
import co.com.sofka.okr.c2.model.vertical.Vertical;
import org.springframework.stereotype.Component;

import java.util.function.Function;


@Component
public class MapperVerticalDTO {

    public Function<Vertical,VerticalDTO> toVerticalDTO(){
        return vertical -> new VerticalDTO(
                vertical.getId(),
                vertical.getVerticalname().getValue()
        );
    }
}
