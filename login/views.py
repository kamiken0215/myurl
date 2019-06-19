from django.shortcuts import render


def login_view(request):
    return render(request, 'login/login_view.html', {})


def administrator_view(request):

    info_dict = {
        'panzer': {'1': ['ガルパンはいいぞ', 'http://girls-und-panzer-finale.jp/'],
                   '2': ['大洗観光サイト', 'http://www.oarai-info.jp/page/page000179.html']},
        'tab_list': {'1': 'なんでも',
                     '2': 'プログラミング',
                     '3': '趣味',
                     },
    }
    return render(request, 'login/administrator.html', {'info_dict': info_dict})