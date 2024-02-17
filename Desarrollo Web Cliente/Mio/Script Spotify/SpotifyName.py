import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

# Configura tus credenciales
client_id = 'b1ba3e3309914029806729517e4eb738'
client_secret = 'd342eca17112406e85c4ba1a6bfc824d'

# Autenticación
client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# ID de la playlist
playlist_id = '6uvuY4YGiVKweN8RKWQqzX'

# Obtén los datos de la playlist
results = sp.playlist(playlist_id)

# Abre el archivo de texto
with open('playlist.txt', 'w') as f:
    # Recorre las canciones de la playlist
    for item in results['tracks']['items']:
        track = item['track']
        # Escribe el nombre de la canción y el artista en el archivo de texto
        f.write(f"{track['name']} - {track['artists'][0]['name']}\n")
