// Compiled by ClojureScript 1.10.520 {:target :webworker}
goog.provide('replete.fs');
goog.require('cljs.core');
goog.require('clojure.set');
replete.fs.kw_encodings = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"utf-8","utf-8",-823282479),"UTF-8"], null);
replete.fs.str_encodings = clojure.set.map_invert.call(null,replete.fs.kw_encodings);
replete.fs.node = (function replete$fs$node(node_name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),node_name,new cljs.core.Keyword(null,"created","created",-704993748),(new Date()),new cljs.core.Keyword(null,"modified","modified",-2134587826),(new Date())], null);
});
replete.fs.file = (function replete$fs$file(var_args){
var G__2020 = arguments.length;
switch (G__2020) {
case 1:
return replete.fs.file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.file.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.file.call(null,file_name,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
});

replete.fs.file.cljs$core$IFn$_invoke$arity$2 = (function (file_name,encoding){
return cljs.core.merge.call(null,replete.fs.node.call(null,file_name),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"encoding","encoding",1728578272),(((encoding instanceof cljs.core.Keyword))?encoding:(function (){var or__4131__auto__ = replete.fs.str_encodings.call(null,encoding);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"utf-8","utf-8",-823282479);
}
})()),new cljs.core.Keyword(null,"address","address",559499426),cljs.core.keyword.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null)))], null));
});

replete.fs.file.cljs$lang$maxFixedArity = 2;

replete.fs.dir = (function replete$fs$dir(var_args){
var G__2023 = arguments.length;
switch (G__2023) {
case 1:
return replete.fs.dir.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.dir.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.dir.cljs$core$IFn$_invoke$arity$1 = (function (dir_name){
return replete.fs.dir.call(null,dir_name,cljs.core.PersistentArrayMap.EMPTY);
});

replete.fs.dir.cljs$core$IFn$_invoke$arity$2 = (function (dir_name,nodes){
return cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keyword.call(null,dir_name),cljs.core.merge.call(null,replete.fs.node.call(null,dir_name),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"directory","directory",-58912409),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes], null)));
});

replete.fs.dir.cljs$lang$maxFixedArity = 2;

replete.fs.replete_fs = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentArrayMap.EMPTY], null));
replete.fs.file_data = (function replete$fs$file_data(var_args){
var G__2026 = arguments.length;
switch (G__2026) {
case 1:
return replete.fs.file_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.file_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.file_data.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.file_data.call(null,replete.fs.replete_fs,file_name);
});

replete.fs.file_data.cljs$core$IFn$_invoke$arity$2 = (function (fs,file_name){
return cljs.core.clj__GT_js.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name)], null)));
});

replete.fs.file_data.cljs$lang$maxFixedArity = 2;

replete.fs.directory_QMARK_ = (function replete$fs$directory_QMARK_(var_args){
var G__2029 = arguments.length;
switch (G__2029) {
case 1:
return replete.fs.directory_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.directory_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.directory_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.directory_QMARK_.call(null,replete.fs.replete_fs,file_name);
});

replete.fs.directory_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (fs,file_name){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name)], null))),new cljs.core.Keyword(null,"directory","directory",-58912409));
});

replete.fs.directory_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Creates a node in the file system with an address for content
 */
replete.fs.create_file = (function replete$fs$create_file(var_args){
var G__2032 = arguments.length;
switch (G__2032) {
case 1:
return replete.fs.create_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.create_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.fs.create_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.create_file.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.create_file.call(null,file_name,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
});

replete.fs.create_file.cljs$core$IFn$_invoke$arity$2 = (function (file_name,encoding){
return replete.fs.create_file.call(null,replete.fs.replete_fs,file_name,encoding);
});

replete.fs.create_file.cljs$core$IFn$_invoke$arity$3 = (function (fs,file_name,encoding){
var f = replete.fs.file.call(null,file_name,encoding);
return cljs.core.swap_BANG_.call(null,fs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f))], null),f);
});

replete.fs.create_file.cljs$lang$maxFixedArity = 3;

replete.fs.file_not_found = (0);
/**
 * Provides a file-descriptor to an existing file or 0
 */
replete.fs.open_file_reader = (function replete$fs$open_file_reader(var_args){
var G__2035 = arguments.length;
switch (G__2035) {
case 1:
return replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.open_file_reader.call(null,file_name,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
});

replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$2 = (function (file_name,encoding){
return replete.fs.open_file_reader.call(null,replete.fs.replete_fs,file_name,encoding);
});

replete.fs.open_file_reader.cljs$core$IFn$_invoke$arity$3 = (function (fs,file_name,encoding){
var temp__5718__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name)], null));
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(node),encoding)){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(node);
} else {
return replete.fs.file_not_found;
}
} else {
return null;
}
});

replete.fs.open_file_reader.cljs$lang$maxFixedArity = 3;

/**
 * Return a tuple of [data err] where err is normally nil
 */
replete.fs.read_file = (function replete$fs$read_file(var_args){
var G__2038 = arguments.length;
switch (G__2038) {
case 1:
return replete.fs.read_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.read_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.read_file.cljs$core$IFn$_invoke$arity$1 = (function (fd){
return replete.fs.read_file.call(null,replete.fs.replete_fs,fd);
});

replete.fs.read_file.cljs$core$IFn$_invoke$arity$2 = (function (fs,fd){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),fd], null)),null], null);
});

replete.fs.read_file.cljs$lang$maxFixedArity = 2;

replete.fs.close_file_reader = (function replete$fs$close_file_reader(fd){
return null;
});
/**
 * Provides a file-descriptor to an existing or newly created file
 */
replete.fs.open_file_writer = (function replete$fs$open_file_writer(var_args){
var G__2041 = arguments.length;
switch (G__2041) {
case 1:
return replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.open_file_writer.call(null,file_name,false);
});

replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$2 = (function (file_name,append_QMARK_){
return replete.fs.open_file_writer.call(null,file_name,append_QMARK_,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
});

replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$3 = (function (file_name,append_QMARK_,encoding){
return replete.fs.open_file_writer.call(null,replete.fs.replete_fs,file_name,append_QMARK_,encoding);
});

replete.fs.open_file_writer.cljs$core$IFn$_invoke$arity$4 = (function (fs,file_name,append_QMARK_,encoding){
var temp__5718__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name)], null));
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"encoding","encoding",1728578272).cljs$core$IFn$_invoke$arity$1(node),encoding)){
return new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
} else {
return cljs.core.get_in.call(null,replete.fs.create_file.call(null,fs,file_name,encoding),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name),new cljs.core.Keyword(null,"address","address",559499426)], null));
}
});

replete.fs.open_file_writer.cljs$lang$maxFixedArity = 4;

replete.fs.write_file = (function replete$fs$write_file(var_args){
var G__2044 = arguments.length;
switch (G__2044) {
case 2:
return replete.fs.write_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.fs.write_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.write_file.cljs$core$IFn$_invoke$arity$2 = (function (fd,content){
return replete.fs.write_file.call(null,replete.fs.replete_fs,fd,content);
});

replete.fs.write_file.cljs$core$IFn$_invoke$arity$3 = (function (fs,fd,content){
if(cljs.core.truth_(cljs.core.swap_BANG_.call(null,fs,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),fd], null),content))){
return null;
} else {
return new cljs.core.Keyword(null,"writer-error","writer-error",-2039587125);
}
});

replete.fs.write_file.cljs$lang$maxFixedArity = 3;

replete.fs.copy_file = (function replete$fs$copy_file(var_args){
var G__2047 = arguments.length;
switch (G__2047) {
case 2:
return replete.fs.copy_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replete.fs.copy_file.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.copy_file.cljs$core$IFn$_invoke$arity$2 = (function (from_file,to_file){
return replete.fs.copy_file.call(null,replete.fs.replete_fs,from_file,to_file);
});

replete.fs.copy_file.cljs$core$IFn$_invoke$arity$3 = (function (fs,from_file,to_file){
var read_fd = replete.fs.open_file_reader.call(null,fs,from_file,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
var write_fd = replete.fs.open_file_writer.call(null,fs,to_file,null,new cljs.core.Keyword(null,"utf-8","utf-8",-823282479));
var and__4120__auto__ = read_fd;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = write_fd;
if(cljs.core.truth_(and__4120__auto____$1)){
return replete.fs.write_file.call(null,fs,write_fd,replete.fs.read_file.call(null,read_fd));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

replete.fs.copy_file.cljs$lang$maxFixedArity = 3;

replete.fs.delete_file = (function replete$fs$delete_file(var_args){
var G__2050 = arguments.length;
switch (G__2050) {
case 1:
return replete.fs.delete_file.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replete.fs.delete_file.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

replete.fs.delete_file.cljs$core$IFn$_invoke$arity$1 = (function (file_name){
return replete.fs.delete_file.call(null,replete.fs.replete_fs,file_name);
});

replete.fs.delete_file.cljs$core$IFn$_invoke$arity$2 = (function (fs,file_name){
var temp__5720__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,fs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.keyword.call(null,file_name)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,fs,cljs.core.update_in,cljs.core.dissoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(node));

return cljs.core.swap_BANG_.call(null,fs,cljs.core.update_in,cljs.core.dissoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),cljs.core.keyword.call(null,file_name));
} else {
return null;
}
});

replete.fs.delete_file.cljs$lang$maxFixedArity = 2;

replete.fs.flush_file_writer = (function replete$fs$flush_file_writer(fd){
return null;
});
replete.fs.flush_stdout = (function replete$fs$flush_stdout(){
return null;
});
replete.fs.flush_stderr = (function replete$fs$flush_stderr(){
return null;
});
replete.fs.read_stdin = (function replete$fs$read_stdin(){
throw cljs.core.ex_info.call(null,"Unsupported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"REPLETE_RAW_READ_STDIN"], null));
});
replete.fs.list_files = (function replete$fs$list_files(path){
throw cljs.core.ex_info.call(null,"Unsupported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"REPLETE_LIST_FILES"], null));
});
replete.fs.make_parent_dirs = (function replete$fs$make_parent_dirs(path){
throw cljs.core.ex_info.call(null,"Unsupported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"REPLETE_MKDIRS"], null));
});
replete.fs.close_file_writer = (function replete$fs$close_file_writer(fd){
return null;
});
goog.global.REPLETE_RAW_READ_STDIN = replete.fs.read_stdin;
goog.global.REPLETE_RAW_FLUSH_STDOUT = replete.fs.flush_stdout;
goog.global.REPLETE_RAW_FLUSH_STDERR = replete.fs.flush_stderr;
goog.global.REPLETE_LIST_FILES = replete.fs.list_files;
goog.global.REPLETE_MKDIRS = replete.fs.make_parent_dirs;
goog.global.REPLETE_IS_DIRECTORY = replete.fs.directory_QMARK_;
goog.global.REPLETE_FILE_READER_OPEN = replete.fs.open_file_reader;
goog.global.REPLETE_FILE_READER_READ = replete.fs.read_file;
goog.global.REPLETE_FILE_READER_CLOSE = replete.fs.close_file_reader;
goog.global.REPLETE_FILE_INPUT_STREAM_OPEN = replete.fs.open_file_reader;
goog.global.REPLETE_FILE_INPUT_STREAM_READ = replete.fs.read_file;
goog.global.REPLETE_FILE_INPUT_STREAM_CLOSE = replete.fs.close_file_reader;
goog.global.REPLETE_FILE_WRITER_OPEN = replete.fs.open_file_writer;
goog.global.REPLETE_FILE_WRITER_WRITE = replete.fs.write_file;
goog.global.REPLETE_FILE_WRITER_FLUSH = replete.fs.flush_file_writer;
goog.global.REPLETE_FILE_WRITER_CLOSE = replete.fs.close_file_writer;
goog.global.REPLETE_FILE_OUTPUT_STREAM_OPEN = replete.fs.open_file_writer;
goog.global.REPLETE_FILE_OUTPUT_STREAM_WRITE = replete.fs.write_file;
goog.global.REPLETE_FILE_OUTPUT_STREAM_FLUSH = replete.fs.flush_file_writer;
goog.global.REPLETE_FILE_OUTPUT_STREAM_CLOSE = replete.fs.close_file_writer;
goog.global.REPLETE_COPY = replete.fs.copy_file;
goog.global.REPLETE_DELETE = replete.fs.delete_file;
goog.global.REPLETE_FSTAT = replete.fs.file_data;

//# sourceMappingURL=fs.js.map
