import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'capitalize'
})
export class Capitalize implements PipeTransform{
  /*
   首字母大写
   輸入：{{ 'hello wolrd' | capitalize }}
   輸出：Hello World
   */
  transform(value) {
    if (value) {
      let words = value.split(' ');
      value = words.map(word => word.substring(0, 1).toUpperCase() + word.substring(1))
        .join(' ');
    }
    return value;
  }
}
