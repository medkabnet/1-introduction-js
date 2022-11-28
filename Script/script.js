$(document).ready(()=>{
    $(".btn-dec-exe").click(e=>{
        const id_dec_exe = Number($(e.currentTarget).attr("id-dex-exe"));
        var input_exe = $(".input-exe[id-dex-exe='"+id_dec_exe+"']").val()
        var validation_exe = $(".validation-exe[id-dex-exe='"+id_dec_exe+"']")
        var message =""; 
        var text = "";
        var num = 0;
        var bool = false;
        try {
            const result = eval(input_exe) 
            if(result == null){ 
                switch (id_dec_exe) {
                    case 1: message="Variable Bien créer";break;
                    case 2: message="Constante Bien créer";break;
                    case 3: message="Variable Bien créer";break;
                    case 4: message="Constante Bien créer";break;
                }
            }else{
                switch (id_dec_exe) {
                    case 5: message="La nouvelle valeur de la variable num : " + num;break;
                    case 6: message="La nouvelle valeur de la variable text : " + text;break;
                    case 7: message="La nouvelle valeur de la variable bool : " + bool;break;
                }
            }
            $(validation_exe).html(message);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $(".input-exe[id-dex-exe='"+id_dec_exe+"']").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ;
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $(".input-exe[id-dex-exe='"+id_dec_exe+"']").addClass("is-invalid").removeClass("is-valid")
        }
    });

    $(".btn-op-num-exe").click(e=>{
        const id_op_num_exe = Number($(e.currentTarget).attr("id-op-num-exe"));
        var input_exe = $(".input-exe[id-op-num-exe='"+id_op_num_exe+"']").val()
        var validation_exe = $(".validation-exe[id-op-num-exe='"+id_op_num_exe+"']")
        var opration ;
        var num1,num2,resulta;
        var count ;
        switch (id_op_num_exe) {
            case 6: count=1;break;
            case 7: count=7;break;
            case 8: count=12;break;
            case 9: count=12;break;
        }
        try {
            const result = eval(input_exe) 
            if(id_op_num_exe<=5){
                if(typeof num1 == "boolean" || isNaN(num1)) {
                    throw "num1 n'a pas un valeur numérique";
                }
                if(typeof num2 == "boolean" ||isNaN(num2)) {
                    throw "num2 n'a pas un valeur numérique";
                }
            }
            switch (id_op_num_exe) {
                case 1: opration="resulta = num1 + num2";break;
                case 2: opration="resulta = num1 - num2";break;
                case 3: opration="resulta = num1 * num2";break;
                case 4: opration="resulta = num1 / num2";break;
                case 5: opration="resulta = num1 % num2";break;
                case 6:
                    if(count != 7) 
                        throw "Operation est non correct";
                    opration="count+=7";resulta = count;break;
                case 7: 
                    if(count != 4) 
                        throw "Operation est non correct";
                    opration="count-=3";resulta = count;break;
                case 8: 
                    if(count != 24) 
                        throw "Operation est non correct";
                    opration="count*=2";resulta = count;break;
                case 9: 
                    if(count != 6) 
                        throw "Operation est non correct";
                    opration="count/=2";resulta = count;break;
            }
            $(validation_exe).html("Le resulta de l'opération : '"+opration +"' c'est "+ resulta);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $(".input-exe[id-op-num-exe='"+id_op_num_exe+"']").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ;
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $(".input-exe[id-op-num-exe='"+id_op_num_exe+"']").addClass("is-invalid").removeClass("is-valid")
        }
    });

    $(".btn-op-txt-exe").click(e=>{
        const id_op_txt_exe = Number($(e.currentTarget).attr("id-op-txt-exe"));
        var input_exe = $(".input-exe[id-op-txt-exe='"+id_op_txt_exe+"']").val()
        var validation_exe = $(".validation-exe[id-op-txt-exe='"+id_op_txt_exe+"']")
        var opration ;
        var num,numString,text1,text2,resulta;
        try {
            const result = eval(input_exe) 

            switch (id_op_txt_exe) {
                case 1: opration = "resulta = text1 + text2";break;
                case 2: opration = "resulta = text1 + \""+resulta.replace(text1,"")+"\"";break;
                case 3:
                    if(typeof numString != "string")
                        throw "numString n`est un texte"
                    if(typeof num != "number" )
                        throw "num n`est un numero";
                    opration = "resulta = num + numString";break;
                case 4:
                    if(typeof numString != "string")
                        throw "numString n`est un texte"
                    if(typeof num != "number" )
                        throw "num n`est un numero";
                    opration = "resulta = num + numString";break;
            }
            $(validation_exe).html("Le resulta du code : '"+opration +"' c'est "+ resulta);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $(".input-exe[id-op-txt-exe='"+id_op_txt_exe+"']").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ;
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $(".input-exe[id-op-txt-exe='"+id_op_txt_exe+"']").addClass("is-invalid").removeClass("is-valid")
        }
    });

    $(".btn-cal-exe").click(e=>{
        var input_exe = $("#input-exe").val()
        var validation_exe = $("#validation-2");
        var operation ;
        try {
            if(input_exe == ""){
                throw "Rediger le code JS";
            }
            operation = eval(input_exe);
            if(isNaN(num1)){
                throw "num1 n'est pas un numero";
            }
            if(isNaN(num2)){
                throw "num2 n'est pas un numero";
            }
            if(["+","-","*","/"].indexOf(ope) === -1){
                throw "Opération non correct";
            }
            let msg = eval(resulta);
            $(validation_exe).html("Le resulta de l'oparetion '"+ operation + "' c'est : "+ msg);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $("#input-exe").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ; 
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#input-exe").addClass("is-invalid").removeClass("is-valid");
        }
    });

    $(".btn-condi-exe").click(e=>{
        const id_condi_exe = Number($(e.currentTarget).attr("id-condi-exe"));
        var input_exe = $(".input-exe[id-condi-exe='"+id_condi_exe+"']").val()
        var validation_exe = $(".validation-exe[id-condi-exe='"+id_condi_exe+"']")
        var resulta = "" ;
        try {
            resulta = eval(input_exe) 
            switch (id_condi_exe) {
                case 1: if(!data){
                    throw ""
                }break;
            }
            $(validation_exe).html( resulta);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $(".input-exe[id-condi-exe='"+id_condi_exe+"']").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ;
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $(".input-exe[id-condi-exe='"+id_condi_exe+"']").addClass("is-invalid").removeClass("is-valid")
        }
    });


    $(".btn-val-exe").click(e=>{
        var input_exe = $("#input-exe").val()
        var validation_exe = $("#validation-2");
        var operation ;
        try {
            eval(input_exe);
            $(validation_exe).html(resulta);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $("#input-exe").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ; 
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $("#input-exe").addClass("is-invalid").removeClass("is-valid");
        }
    });

    $(".btn-loop-for-exe").click(e=>{
        const id_loop_for_exe = Number($(e.currentTarget).attr("id-loop-for-exe"));
        var input_exe = $(".input-exe[id-loop-for-exe='"+id_loop_for_exe+"']").val()
        var validation_exe = $(".validation-exe[id-loop-for-exe='"+id_loop_for_exe+"']")
        var resulta = "" ;
        try {
            resulta = eval(input_exe) 
            $(validation_exe).html( resulta);
            $(validation_exe).removeClass("d-none").addClass("valid-feedback").removeClass("invalid-feedback");
            $(".input-exe[id-loop-for-exe='"+id_loop_for_exe+"']").removeClass("is-invalid").addClass("is-valid")
        } catch (e) {
            let messageError ;
            if (e instanceof SyntaxError) {
                messageError =e.message;
            } else {
                messageError =e;
            }
            $(validation_exe).html(messageError);
            $(validation_exe).removeClass("d-none").removeClass("valid-feedback").addClass("invalid-feedback");
            $(".input-exe[id-loop-for-exe='"+id_loop_for_exe+"']").addClass("is-invalid").removeClass("is-valid")
        }
    });
})

