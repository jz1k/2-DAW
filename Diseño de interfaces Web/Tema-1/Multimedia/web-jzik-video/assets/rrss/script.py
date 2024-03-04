import os
from PIL import Image

def resize_image(input_path, output_path, size):
    try:
        img = Image.open(input_path)
        img.thumbnail(size)
        img.save(output_path)
        print(f"Imagen redimensionada a {size[0]}x{size[1]}: {output_path}")
    except Exception as e:
        print(f"Error al redimensionar la imagen: {e}")

def main():
    current_folder = os.path.dirname(os.path.abspath(__file__))  # Carpeta donde se ejecuta el script

    sizes = {
        "s": (100, 100),
        "m": (300, 300),
        "l": (600, 600),
        "xl": (1200, 1200)
    }

    image_formats = [".webp", ".jpeg", ".avif", ".png", ".jpg"]

    for root, _, files in os.walk(current_folder):
        for file in files:
            if file.lower().endswith(tuple(image_formats)):
                input_path = os.path.join(root, file)
                filename, ext = os.path.splitext(file)
                for size_name, size in sizes.items():
                    output_path = os.path.join(current_folder, f"{filename}_{size_name}{ext}")
                    resize_image(input_path, output_path, size)

if __name__ == "__main__":
    main()
