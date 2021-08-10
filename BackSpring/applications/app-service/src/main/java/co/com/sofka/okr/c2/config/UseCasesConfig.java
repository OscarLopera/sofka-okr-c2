package co.com.sofka.okr.c2.config;

import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.ListUserUseCase;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.FilterType;

@Configuration
@ComponentScan(basePackages = "co.com.sofka.okr.c2.usecase",
        includeFilters = {
                @ComponentScan.Filter(type = FilterType.REGEX, pattern = "^.+UseCase$")
        },
        useDefaultFilters = false)
public class UseCasesConfig {

        CreateUserUseCase createUserUseCase(UsuariosRepository usuariosRepository){
                return new CreateUserUseCase(usuariosRepository);
        }

        ListUserUseCase listUserUseCase(UsuariosRepository usuariosRepository){
                return new ListUserUseCase(usuariosRepository);
        }
}
