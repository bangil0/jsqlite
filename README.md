# jsqlite
cuman nyoba doang njir :v


jadi gini .........

kan w merenung tiba tiba dapet ide pengen buat sistem database yg ringan cepat
akhirnya w realisasikan dalam sehari, w tipe orang yg mudah dapet ide dan mudah melupakan :v

konsepnya gini nih
jadi data nanti dalam bentuk file
ketika awal koneksi akan di load file nya
file dalam bentuk json encode , lalu oleh javascrpt akan di decode menjadi object :v

trus di dalam method sudah terdapat bebrapa fungsi seperti getdata, where, insert, delete, tapi w lupa bikin update njir

nah kenapa dibikin fungsi buat manggil data ketimbang format sql query ya biar gampang lah njir :v

kalo di sql aja pengen di jadiin query builder contoh laravel, codeigniter ya mending langsung method :v

kira kira gitu konsepnya

latar belakangnya sih karna pemrosesan di dalam ram gitu maunya, jadi dalam eksekusi program itu dilakukan di ram secara teori gitu
kan booting itu sebenernya mindahin os ke ram :v, assembly dll di eksekusi di ram, jadi lebih cepat ketimbang,jadi data udah ada di ram dan tinggal panggil dalam format json :v, ketimbang harus read dan write data kayak yg di sqlite :V

CMIIW
