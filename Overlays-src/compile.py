import os, shutil, glob
import distutils.dir_util
from ruamel import yaml
from os import walk
templateFile = "../nfive-template.yml"
nfiveFile = "../nfive.yml"
distPath = "../Overlays-src/dist"
finalPath = "../Overlays"

try:
	shutil.rmtree(finalPath)
except:
	print('Overlays doesn\'t already exist, skipping deletion')

distutils.dir_util.copy_tree(distPath, finalPath)
shutil.move(finalPath + '/index.html', finalPath + '/CharacterOverlay.html')

with open(templateFile, 'r') as stream:
    try:
        data = yaml.safe_load(stream)
        print(data)

        data['client']['files'] = []

        for filename in glob.iglob(finalPath + '/**', recursive=True):
            if os.path.isfile(filename):
                data['client']['files'].append(filename.replace('../', ''))

        with open(nfiveFile, "w") as f:
            yaml.dump(data, f, Dumper=yaml.RoundTripDumper)

        print(data)

    except yaml.YAMLError as exc:
        print(exc)
