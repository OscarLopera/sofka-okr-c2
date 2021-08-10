package co.com.sofka.okr.c2.api;

import co.com.sofka.okr.c2.model.okrs.KRS;
import co.com.sofka.okr.c2.model.okrs.OKRS;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Component
public class MapperOKRDTO  {

    public Function<OKRS, OKRSDTO> okrToDto(){
        return okr-> new OKRSDTO(
                okr.getId().getValue(),
                okr.getObjective().getValue(),
                okr.getTitle().getValue(),
                okr.getManagerId(),
                okr.getDescription().getValue(),
                okr.getVerticalId().getValue(),
                okr.getProgress(),
                okr.getHistoricalProgress(),
                okr.getKrs().stream().map(it->krToDto().apply(it)).collect(Collectors.toList())
        );
    }

    public Function<KRS, KRDTO> krToDto(){
        return kr-> new KRDTO(
                kr.getKrId().getValue(),
                kr.getIdOkr().getValue(),
                kr.getTitle().getValue(),
                kr.getDescription().getValue(),
                kr.getManagerName(),
                kr.getManagerEmail().getValue(),
                kr.getStartDate(),
                kr.getEndDate(),
                kr.getLoadValue(),
                kr.getProgress()
        );
    }

    public Function <List<KRS>,List<KRDTO>> krdtoList( ){
        return list -> list.stream().map(it-> krToDto().apply(it)).collect(Collectors.toList());
    }
}
