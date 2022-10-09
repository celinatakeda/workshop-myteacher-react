from rest_framework import serializers

from teacher.models import Professor

class ProfessorSerializer(serializers.ModelSerializer):
  class Meta:
    model = Professor
    fields = '__all__' # pega todos os atributos 
    #fields = ('nome', 'valor_hora', 'descricao', 'foto')