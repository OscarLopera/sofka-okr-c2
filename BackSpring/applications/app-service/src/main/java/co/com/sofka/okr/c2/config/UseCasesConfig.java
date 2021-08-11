package co.com.sofka.okr.c2.config;


import co.com.sofka.okr.c2.model.preguntas.gateways.PreguntasRepository;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.model.vertical.gateways.VerticalRepository;
import co.com.sofka.okr.c2.usecase.preguntas.ListPreguntasUseCase;
import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.ListUserUseCase;

import co.com.sofka.okr.c2.usecase.vertical.ListVerticalUseCase;

import co.com.sofka.okr.c2.usecase.usuario.UpdateUserUseCase;

import co.com.sofka.okr.c2.usecase.vertical.VerticalUseCase;

import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.usecase.okr.GetAllOKRByUserUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOKRByCompletedUseCase;
import co.com.sofka.okr.c2.usecase.okr.GetOkrByIdUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetAllUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.GetUserOKRUseCase;
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

        ListVerticalUseCase listVerticalUseCase(VerticalRepository verticalRepository) {
                return new ListVerticalUseCase(verticalRepository);
        }
        UpdateUserUseCase updateUserUseCase(UsuariosRepository usuariosRepository){
                return new UpdateUserUseCase(usuariosRepository);

        }
        ListPreguntasUseCase listPreguntasUseCase(PreguntasRepository preguntasRepository){
                return new ListPreguntasUseCase(preguntasRepository);
        }

        public GetAllOKRByUserUseCase getAllOKRByUserUseCase(OKRSRepository okrsRepository){
                return new GetAllOKRByUserUseCase(okrsRepository);
        }

        public GetUserOKRUseCase getUserOKRUseCase(UsuariosRepository usuariosRepository){
                return new GetUserOKRUseCase(usuariosRepository);
        }

        public GetAllUserUseCase getAllUserUseCase(UsuariosRepository usuariosRepository){
                return new GetAllUserUseCase(usuariosRepository);
        }


        public GetOkrByIdUseCase getOkrByIdUseCase(OKRSRepository repository){
                return new GetOkrByIdUseCase(repository);
        }

        public GetOKRByCompletedUseCase getOKRByCompleted(OKRSRepository repository){
                return new GetOKRByCompletedUseCase(repository);
        }

}
