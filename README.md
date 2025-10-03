🔍 Análise Inicial (Before)

Gargalos encontrados no relatório Lighthouse:

Imagens em PNG pesadas, sem lazy-loading e sem formatos otimizados.

Fonts → carregando via Google Fonts (bloqueando renderização).

JS → não minificado, carregado de forma síncrona.

CSS → regras não utilizadas e sem minificação.

HTML → sem preload, recursos sem defer/async.

Prints (Before)
![Before 1](./docs/before1.png)
![Before 2](./docs/before2.png)
![Before 3](./docs/before3.png)

🚀 Melhorias aplicadas

Imagens → convertidas para WEBP/AVIF, uso de srcset, sizes, loading="lazy" e decoding="async".

Fonts → removido Google Fonts, adotado system font stack.

JS → minificação, uso de type="module" e defer.

CSS → minificado + remoção de estilos não utilizados.

HTML → preload da imagem principal e ordem de recursos otimizada.

✅ Reanálise (After)

Resultados após aplicar as melhorias:

Performance: subiu de ~71% para 95% (conforme prints).

Acessibilidade: manteve 100%.

Best Practices: manteve 100%.

SEO: subiu de ~71% para 95% (conforme prints)

Prints (After)

![After 1](./docs/after1.png)
![After 2](./docs/after2.png)
![After 3](./docs/after3.png)


📊 Comparativo Before x After
Métrica	           Before	After
Performance	        71%  	95%
Acessibilidade	     95%	95%
Best Practices	    100%	100%
SEO	                100%	100%