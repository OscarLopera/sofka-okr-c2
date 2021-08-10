package co.com.sofka.okr.c2.config;

import co.com.sofka.okr.c2.model.okrs.gateways.OKRSRepository;
import co.com.sofka.okr.c2.model.usuarios.gateways.UsuariosRepository;
import co.com.sofka.okr.c2.usecase.okr.GetAllOKRByUserUseCase;
import co.com.sofka.okr.c2.usecase.usuario.CreateUserUseCase;
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

        public GetAllOKRByUserUseCase getAllOKRByUserUseCase(OKRSRepository okrsRepository){
                return new GetAllOKRByUserUseCase(okrsRepository);
        }

        public GetUserOKRUseCase getUserOKRUseCase(UsuariosRepository usuariosRepository){
                return new GetUserOKRUseCase(usuariosRepository);
        }
}
