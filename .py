import requests, json

livros = [
    'o+poder+do+habito',
    'harry+potter+e+a+pedra+filosofal',
    'orgulho+e+preconceito',
    'como+fazer+amigos+e+influenciar+pessoas',
    'a+guerra+dos+tronos',
    'o+codigo+da+vinci',
    'senhor+dos+aneis:+a+sociedade+do+anel',
    'as+cronicas+de+narnia',
    'cem+anos+de+solidao',
    'o+pequeno+principe',
    'o+alquimista',
    'o+lado+bom+da+vida',
    'a+cabana',
    'o+senhor+das+moscas',
    'o+monge+e+o+executivo',
    'mulheres+que+correm+com+os+lobos',
    'eu,+robo',
    'a+menina+que+roubava+livros',
    'o+nome+do+vento',
    'o+fim+da+eternidade',
]

resultado = ''


# for livro in livros:
#     try:
        
#     except:
#         print(f'erro: {livro}')

#     print(livro, ' adicionado')



resultado += '{\n'
response = requests.get(f'https://www.googleapis.com/books/v1/volumes?q=contos+peculiares')

dados = json.loads(response.text)
resultado += f'\"title\": \"{dados["items"][0]["volumeInfo"]["title"]}\",'
resultado += '\n'
resultado += f'\"image\": \"{dados["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]}\"'
resultado += '\n},\n'

print(resultado)