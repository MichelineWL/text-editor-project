'use client';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import './../../styles/ckeditor-styles.css'; // Impor gaya kustom
import {
	ClassicEditor,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	LinkImage
} from 'ckeditor5';


function CustomEditor({ initialData }) {
    return (
        <div className="w-full max-w-3xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-4">CKEditor 5 with React</h1>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    licenseKey: 'GPL',
                    toolbar: [
                        'undo', 'redo',
                        '|', 'heading', '|',
                        'bold', 'italic', 'underline', '|',
                        'link', 'bulletedList', 'numberedList', '|',
                        'blockQuote', 'insertTable', 'uploadImage'
                    ],
                    language: 'en',
                }}
                data={initialData || '<p>Start editing here...</p>'}
            />
        </div>
    );
}

export default CustomEditor;
