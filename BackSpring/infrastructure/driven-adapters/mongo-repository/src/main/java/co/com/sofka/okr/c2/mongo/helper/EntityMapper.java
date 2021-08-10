package co.com.sofka.okr.c2.mongo.helper;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.OKRS;
import co.com.sofka.okr.c2.model.okrs.values.*;
import co.com.sofka.okr.c2.model.usuarios.values.Email;
import co.com.sofka.okr.c2.model.usuarios.values.VerticalId;
import co.com.sofka.okr.c2.mongo.entities.KREntity;
import co.com.sofka.okr.c2.mongo.entities.OKREntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.function.Function;

@Component
public class EntityMapper {
    public Function<OKREntity, OKRS> fromOKREntity() {
        return newEntity -> new OKRS(
                new IdOkr(newEntity.getId()),
                new Objective(newEntity.getObjective()),
                new Title(newEntity.getTitle()),
                newEntity.getManagerId(),
                new Description(newEntity.getDescription()),
                new VerticalId(newEntity.getVerticalId()),
                newEntity.getProgress(),
                newEntity.getHistoricalProgress(),
                new ArrayList<>()
        );
    }

    public Function<KREntity, KRS> fromKREntity() {
        return newEntity -> new KRS(
                new KRId(newEntity.getId()),
                new IdOkr(newEntity.getIdOkr()),
                new Title(newEntity.getTitle()),
                new Description(newEntity.getDescription()),
                newEntity.getManagerName(),
                new Email(newEntity.getManagerEmail()),
                newEntity.getStartDate(),
                newEntity.getEndDate(),
                newEntity.getLoadValue(),
                newEntity.getProgress()
        );
    }

}
