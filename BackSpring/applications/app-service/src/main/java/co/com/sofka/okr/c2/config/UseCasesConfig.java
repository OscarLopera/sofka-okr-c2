package co.com.sofka.okr.c2.config;

import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.ListUserUseCase;

import co.com.sofka.okr.c2.usecase.vertical.ListVerticalUseCase;

import co.com.sofka.okr.c2.usecase.usuario.UpdateUserUseCase;

import co.com.sofka.okr.c2.usecase.vertical.VerticalUseCase;
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
        VerticalUseCase verticalUseCase(VerticalRepository verticalRepository){
                return new VerticalUseCase(verticalRepository);
        }

<<<<<<< HEAD
=======
        ListVerticalUseCase listVerticalUseCase(VerticalRepository verticalRepository) {
                return new ListVerticalUseCase(verticalRepository);
        }
        UpdateUserUseCase updateUserUseCase(UsuariosRepository usuariosRepository){
                return new UpdateUserUseCase(usuariosRepository);

        }
>>>>>>> 21ce400bb1c03550e4b18ea9af02e3a2cfb1b6b0
}
