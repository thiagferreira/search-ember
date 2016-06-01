import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  nome: attr('string'),
  divisao: attr('string'),
  email: attr('string'),
  emailPessoal: attr('string'),
  localFisico: attr('string'),
  ramal: attr('string'),
  divModal: attr('string'),
  foto: attr('string')
});
