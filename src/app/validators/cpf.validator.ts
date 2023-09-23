import { AbstractControl } from "@angular/forms";
import { cpf } from "cpf-cnpj-validator";

export function cpfValidator(control: AbstractControl) {
    const cpfValue = control.value as string;

    if (!cpf.isValid(cpfValue)) {
        return { cpfInvalid: true };
    } else {
        return null;
    }
}
